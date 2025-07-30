import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Package, 
  Clock, 
  CheckCircle, 
  Truck,
  ArrowLeft
} from "lucide-react";

interface Order {
  id: string;
  items: { name: string; quantity: number; price: number }[];
  status: "confirmed" | "preparing" | "ready" | "out_for_delivery" | "delivered";
  totalAmount: number;
  orderDate: string;
  estimatedDelivery: string;
}

const MyOrders = () => {
  const navigate = useNavigate();
  
  // Mock orders data - in real app this would come from API/database
  const [orders] = useState<Order[]>([
    {
      id: "CC1753868710698",
      items: [
        { name: "Paneer Butter Masala", quantity: 2, price: 280 },
        { name: "Dal Tadka", quantity: 1, price: 180 }
      ],
      status: "out_for_delivery",
      totalAmount: 740,
      orderDate: "2024-01-15",
      estimatedDelivery: "10-15 mins"
    },
    {
      id: "CC1753868710699",
      items: [
        { name: "Chicken Vindaloo", quantity: 1, price: 320 },
        { name: "Quinoa Khichdi", quantity: 1, price: 220 }
      ],
      status: "delivered",
      totalAmount: 540,
      orderDate: "2024-01-14",
      estimatedDelivery: "Delivered"
    },
    {
      id: "CC1753868710700",
      items: [
        { name: "Samosa Platter", quantity: 1, price: 150 }
      ],
      status: "preparing",
      totalAmount: 150,
      orderDate: "2024-01-13",
      estimatedDelivery: "25-30 mins"
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "preparing":
        return <Clock className="h-5 w-5 text-orange-600" />;
      case "ready":
        return <Package className="h-5 w-5 text-blue-600" />;
      case "out_for_delivery":
        return <Truck className="h-5 w-5 text-purple-600" />;
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "delivered":
        return "default";
      case "out_for_delivery":
        return "secondary";
      case "preparing":
        return "outline";
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
              <Package className="h-16 w-16 animate-float" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My Orders
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Track and view all your orders
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-6">
            {orders.length === 0 ? (
              <Card className="bg-gradient-card shadow-elegant">
                <CardContent className="p-12 text-center">
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Orders Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't placed any orders yet. Start exploring our menu!
                  </p>
                  <Button onClick={() => navigate("/home")}>
                    Browse Menu
                  </Button>
                </CardContent>
              </Card>
            ) : (
              orders.map((order) => (
                <Card key={order.id} className="bg-gradient-card shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">
                        Order #{order.id}
                      </CardTitle>
                      <Badge variant={getStatusBadgeVariant(order.status)}>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(order.status)}
                          <span>{order.status.replace("_", " ").toUpperCase()}</span>
                        </div>
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Ordered on {new Date(order.orderDate).toLocaleDateString()}</span>
                      <span>₹{order.totalAmount}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Items:</h4>
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.name} x{item.quantity}</span>
                          <span>₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>

                    {/* Status Info */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(order.status)}
                        <span className="text-sm font-medium">
                          {order.status === "delivered" ? "Delivered" : `ETA: ${order.estimatedDelivery}`}
                        </span>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate(`/track-order/${order.id}`)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Track Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate("/home")}
              >
                Order More Food
              </Button>
              <Button 
                variant="default" 
                className="flex-1"
                onClick={() => navigate("/contact")}
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyOrders;