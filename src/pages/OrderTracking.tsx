import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Clock, 
  Truck, 
  ChefHat, 
  Package,
  MapPin,
  Phone,
  ArrowLeft
} from "lucide-react";

interface OrderStatus {
  id: string;
  status: "confirmed" | "preparing" | "ready" | "out_for_delivery" | "delivered";
  estimatedTime: string;
  currentStep: number;
}

const OrderTracking = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  
  // Redirect to home if no orderId provided or invalid format
  useEffect(() => {
    if (!orderId || !orderId.startsWith('CC') || orderId.length < 5) {
      navigate('/');
      return;
    }
  }, [orderId, navigate]);
  
  const [orderStatus, setOrderStatus] = useState<OrderStatus>({
    id: orderId || "CC" + Date.now(),
    status: "confirmed",
    estimatedTime: "30-35 mins",
    currentStep: 1
  });

  const steps = [
    {
      id: 1,
      title: "Order Confirmed",
      description: "Your order has been received",
      icon: CheckCircle,
      status: "completed"
    },
    {
      id: 2,
      title: "Preparing Food",
      description: "Our chefs are preparing your meal",
      icon: ChefHat,
      status: orderStatus.currentStep >= 2 ? "completed" : orderStatus.currentStep === 2 ? "current" : "pending"
    },
    {
      id: 3,
      title: "Food Ready",
      description: "Your order is ready for pickup",
      icon: Package,
      status: orderStatus.currentStep >= 3 ? "completed" : orderStatus.currentStep === 3 ? "current" : "pending"
    },
    {
      id: 4,
      title: "Out for Delivery",
      description: "Your order is on the way",
      icon: Truck,
      status: orderStatus.currentStep >= 4 ? "completed" : orderStatus.currentStep === 4 ? "current" : "pending"
    },
    {
      id: 5,
      title: "Delivered",
      description: "Enjoy your meal!",
      icon: CheckCircle,
      status: orderStatus.currentStep >= 5 ? "completed" : "pending"
    }
  ];

  // Simulate order progress
  useEffect(() => {
    const interval = setInterval(() => {
      setOrderStatus(prev => {
        if (prev.currentStep < 5) {
          const newStep = prev.currentStep + 1;
          let newStatus: OrderStatus["status"] = "confirmed";
          let newEstimatedTime = prev.estimatedTime;

          switch (newStep) {
            case 2:
              newStatus = "preparing";
              newEstimatedTime = "25-30 mins";
              break;
            case 3:
              newStatus = "ready";
              newEstimatedTime = "15-20 mins";
              break;
            case 4:
              newStatus = "out_for_delivery";
              newEstimatedTime = "10-15 mins";
              break;
            case 5:
              newStatus = "delivered";
              newEstimatedTime = "Delivered";
              break;
          }

          return {
            ...prev,
            currentStep: newStep,
            status: newStatus,
            estimatedTime: newEstimatedTime
          };
        }
        return prev;
      });
    }, 8000); // Update every 8 seconds for demo

    return () => clearInterval(interval);
  }, []);

  const getProgressValue = () => {
    return (orderStatus.currentStep / 5) * 100;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "current":
        return "text-blue-600";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusBadgeVariant = () => {
    switch (orderStatus.status) {
      case "delivered":
        return "default";
      case "out_for_delivery":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <Layout isAuthenticated={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card/30">
        {/* Header */}
        <section className="bg-gradient-hero py-16 px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="flex items-center justify-center mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="absolute left-4 top-4 text-primary-foreground hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Truck className="h-16 w-16 animate-float" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Track Your Order
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Order #{orderStatus.id}
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-8">
            {/* Current Status Card */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Current Status</CardTitle>
                  <Badge variant={getStatusBadgeVariant()}>
                    {orderStatus.status.replace("_", " ").toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {orderStatus.estimatedTime}
                  </div>
                  <p className="text-muted-foreground">
                    {orderStatus.status === "delivered" ? "Order Delivered!" : "Estimated delivery time"}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{Math.round(getProgressValue())}%</span>
                  </div>
                  <Progress value={getProgressValue()} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Order Steps */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Order Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.id} className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 ${getStatusColor(step.status)}`}>
                          <div className={`p-2 rounded-full ${
                            step.status === "completed" 
                              ? "bg-green-100 text-green-600" 
                              : step.status === "current"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-semibold ${getStatusColor(step.status)}`}>
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {step.description}
                          </p>
                          {step.status === "current" && (
                            <div className="mt-2">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-blue-600" />
                                <span className="text-sm text-blue-600 font-medium">
                                  In Progress
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                        {index < steps.length - 1 && (
                          <div className="absolute left-6 mt-12 w-0.5 h-12 bg-border"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl">Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Delivery Address</p>
                    <p className="text-muted-foreground text-sm">
                      123 Food Street, Flavor Town, FC 12345
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Contact Number</p>
                    <p className="text-muted-foreground text-sm">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate("/home")}
              >
                Back to Menu
              </Button>
              <Button 
                variant="default" 
                className="flex-1"
                onClick={() => navigate("/contact")}
              >
                Contact Support
              </Button>
            </div>

            {orderStatus.status === "delivered" && (
              <Card className="bg-gradient-accent shadow-elegant">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-accent-foreground mb-2">
                    Order Delivered Successfully!
                  </h3>
                  <p className="text-accent-foreground/80 mb-4">
                    Thank you for choosing CookConnect. We hope you enjoyed your meal!
                  </p>
                  <Button 
                    variant="default"
                    onClick={() => navigate("/home")}
                  >
                    Order Again
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderTracking;