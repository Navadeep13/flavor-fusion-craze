import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, User, Phone, CreditCard, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { allRecipes } from "@/utils/recipeData";
import PaymentModal from "@/components/PaymentModal";

const OrderOnline = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Get recipe from data
  const recipe = allRecipes.find(r => r.id === parseInt(recipeId || "1")) || allRecipes[0];

  const [orderData, setOrderData] = useState({
    recipeName: recipe.name,
    customerName: "",
    phone: "",
    address: "",
    specialInstructions: "",
    quantity: 1
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate order processing
    setTimeout(() => {
      setIsLoading(false);
      setShowPayment(true);
      
      toast({
        title: "Order Details Confirmed!",
        description: "Please proceed with payment.",
      });
    }, 1500);
  };

  const handlePaymentComplete = () => {
    navigate("/thank-you", { 
      state: { 
        orderData: {
          ...orderData,
          totalAmount: finalAmount,
          orderId: `CC${Date.now()}`,
          estimatedDelivery: "30-45 minutes"
        }
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, orderData.quantity + change);
    setOrderData({ ...orderData, quantity: newQuantity });
  };

  const totalAmount = orderData.quantity * recipe.price;
  const deliveryFee = 49;
  const finalAmount = totalAmount + deliveryFee;

  return (
    <Layout isAuthenticated={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card/30">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <ShoppingCart className="h-16 w-16 mx-auto mb-6 animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Order Online
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Complete your order and enjoy fresh food delivered to your door
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Order Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Recipe Selection */}
                    <div className="space-y-2">
                      <Label>Selected Recipe</Label>
                      <div className="p-4 bg-background/50 rounded-lg flex items-center space-x-4">
                        <img 
                          src={recipe.image} 
                          alt={recipe.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{recipe.name}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="accent">₹{recipe.price}</Badge>
                            <Badge variant="outline">{recipe.calories} kcal</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                  {/* Quantity */}
                  <div className="space-y-2">
                    <Label>Quantity</Label>
                    <div className="flex items-center space-x-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleQuantityChange(-1)}
                      >
                        -
                      </Button>
                      <span className="text-xl font-semibold w-12 text-center">{orderData.quantity}</span>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleQuantityChange(1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Customer Details */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="customerName"
                          name="customerName"
                          type="text"
                          value={orderData.customerName}
                          onChange={(e) => setOrderData({ ...orderData, customerName: e.target.value })}
                          placeholder="Enter your full name"
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={orderData.phone}
                          onChange={(e) => setOrderData({ ...orderData, phone: e.target.value })}
                          placeholder="+91 9876543210"
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Delivery Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-muted-foreground h-4 w-4" />
                        <Textarea
                          id="address"
                          name="address"
                          value={orderData.address}
                          onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
                          placeholder="Enter your complete delivery address with landmarks"
                          required
                          rows={3}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                      <Textarea
                        id="specialInstructions"
                        name="specialInstructions"
                        value={orderData.specialInstructions}
                        onChange={(e) => setOrderData({ ...orderData, specialInstructions: e.target.value })}
                        placeholder="Any special cooking instructions or delivery notes..."
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing Order..." : `Place Order - ₹${finalAmount}`}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>{recipe.name} × {orderData.quantity}</span>
                    <span className="font-semibold">₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Delivery Fee</span>
                    <span className="font-semibold">₹{deliveryFee}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <span>₹{finalAmount}</span>
                  </div>
                  
                  <div className="mt-6 p-4 bg-background/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Estimated Delivery</h4>
                    <p className="text-muted-foreground">30-45 minutes</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-accent shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl text-accent-foreground">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 text-accent-foreground">
                    <CreditCard className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">Pay via QR Code</p>
                      <p className="text-sm text-accent-foreground/80">
                        Scan QR code after order confirmation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-elegant">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Why Order with Us?</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Fresh ingredients prepared daily</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Expert chefs with fusion expertise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Quick delivery within 45 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>100% satisfaction guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        open={showPayment}
        onOpenChange={setShowPayment}
        totalAmount={finalAmount}
        onPaymentComplete={handlePaymentComplete}
      />
    </Layout>
  );
};

export default OrderOnline;