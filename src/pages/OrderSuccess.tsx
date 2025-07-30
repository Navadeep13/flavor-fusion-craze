import { useLocation, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  MapPin, 
  Phone,
  Truck,
  Home,
  Eye
} from "lucide-react";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state?.orderData || {
    orderId: `CC${Date.now()}`,
    recipeName: "Delicious Food",
    totalAmount: 299,
    estimatedDelivery: "30-45 minutes",
    customerName: "Food Lover",
    phone: "+91 98765 43210",
    address: "123 Food Street, Flavor Town"
  };

  return (
    <Layout isAuthenticated={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card/30">
        {/* Success Hero Section */}
        <section className="bg-gradient-hero py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto text-primary-foreground">
            <div className="animate-scale-in">
              <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Order Placed Successfully!
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-6">
                Your delicious meal is being prepared
              </p>
              <Badge variant="secondary" className="text-lg px-6 py-3">
                Order #{orderData.orderId}
              </Badge>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Details */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Order Confirmed
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Order Details</h3>
                  <p className="text-muted-foreground">{orderData.recipeName}</p>
                  <div className="flex justify-between">
                    <span>Total Amount:</span>
                    <span className="font-bold text-primary">₹{orderData.totalAmount}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <h3 className="font-semibold">Customer Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Name:</span>
                      <span className="text-muted-foreground">{orderData.customerName}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Phone className="h-4 w-4 mt-0.5 text-primary" />
                      <span className="text-muted-foreground">{orderData.phone}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                      <span className="text-muted-foreground">{orderData.address}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="bg-gradient-accent shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-accent-foreground flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Delivery Time
                </CardTitle>
              </CardHeader>
              <CardContent className="text-accent-foreground">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold">
                    {orderData.estimatedDelivery}
                  </div>
                  <p className="text-accent-foreground/80">
                    Estimated delivery time
                  </p>
                  
                  <div className="bg-accent-foreground/10 rounded-lg p-4 mt-6">
                    <h4 className="font-semibold mb-2">What happens next?</h4>
                    <div className="space-y-2 text-sm text-left">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Order confirmation sent to kitchen</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span>Chefs start preparing your meal</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Truck className="h-4 w-4 text-purple-600" />
                        <span>Order dispatched for delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full"
                onClick={() => navigate(`/track-order/${orderData.orderId}`)}
              >
                <Eye className="h-5 w-5 mr-2" />
                Track Your Order
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => navigate("/home")}
              >
                <Home className="h-5 w-5 mr-2" />
                Back to Menu
              </Button>
            </div>
            
            <div className="text-center">
              <Button 
                variant="ghost" 
                className="text-muted-foreground hover:text-primary"
                onClick={() => navigate("/contact")}
              >
                Need help? Contact Support
              </Button>
            </div>
          </div>

          {/* Appreciation Message */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Thank You for Choosing CookConnect!</h3>
              <p className="text-muted-foreground">
                We're excited to serve you delicious food. Your order is in good hands, 
                and we'll make sure it reaches you fresh and on time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;