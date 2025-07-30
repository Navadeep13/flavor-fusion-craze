import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, QrCode, Clock, MapPin, Phone, Home } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const ThankYou = () => {
  const location = useLocation();
  const orderData = location.state?.orderData || {
    recipeName: "Spicy Korean Fusion Ramen",
    customerName: "Guest",
    phone: "+91 9876543210",
    address: "Gachibowli, Hyderabad",
    totalAmount: 348,
    orderId: "CC1234567890",
    estimatedDelivery: "30-45 minutes",
    quantity: 1
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-primary/60 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <Layout showNavbar={false} showFooter={false}>
          <div className="min-h-screen flex items-center justify-center px-4 py-8">
            <div className="max-w-4xl w-full space-y-8">
              {/* Success Animation */}
              <div className="text-center mb-12">
                <div className="relative">
                  <CheckCircle className="h-24 w-24 text-accent mx-auto animate-bounce-gentle" />
                  <div className="absolute -top-2 -right-2">
                    <div className="w-8 h-8 bg-accent rounded-full animate-ping"></div>
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mt-6 mb-4">
                  Order Confirmed!
                </h1>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Thank you for choosing CraveCraze SRTB Fusion
                </p>
                <Badge variant="accent" className="text-lg px-6 py-2">
                  Order ID: {orderData.orderId}
                </Badge>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Order Details */}
                <Card className="bg-background/95 backdrop-blur-md shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl">Order Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Customer Info */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold">{orderData.recipeName}</p>
                          <p className="text-sm text-muted-foreground">Quantity: {orderData.quantity}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                          <Phone className="h-5 w-5 text-secondary-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold">{orderData.customerName}</p>
                          <p className="text-sm text-muted-foreground">{orderData.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold">Delivery Address</p>
                          <p className="text-sm text-muted-foreground">{orderData.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold">Estimated Delivery</p>
                          <p className="text-sm text-muted-foreground">{orderData.estimatedDelivery}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total Amount</span>
                        <span className="text-primary">₹{orderData.totalAmount}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* QR Code Payment */}
                <Card className="bg-background/95 backdrop-blur-md shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Complete Payment</CardTitle>
                    <p className="text-center text-muted-foreground">
                      Scan the QR code below to complete your payment
                    </p>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    {/* QR Code Placeholder */}
                    <div className="bg-gradient-accent p-8 rounded-2xl mx-auto max-w-xs">
                      <QrCode className="h-32 w-32 text-accent-foreground mx-auto mb-4" />
                      <p className="text-accent-foreground font-semibold">
                        ₹{orderData.totalAmount}
                      </p>
                      <p className="text-sm text-accent-foreground/80">
                        CraveCraze Payment
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-card rounded-lg">
                        <h4 className="font-semibold mb-2">Payment Instructions</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>1. Open your payment app (GPay, PhonePe, Paytm)</p>
                          <p>2. Scan the QR code above</p>
                          <p>3. Enter amount: ₹{orderData.totalAmount}</p>
                          <p>4. Complete the payment</p>
                        </div>
                      </div>

                      <Button variant="hero" size="lg" className="w-full animate-bounce-gentle">
                        <QrCode className="h-5 w-5 mr-2" />
                        Payment Successful ✓
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* What's Next */}
              <Card className="bg-background/95 backdrop-blur-md shadow-elegant">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl font-bold text-primary-foreground">1</span>
                      </div>
                      <h4 className="font-semibold">Order Confirmed</h4>
                      <p className="text-sm text-muted-foreground">
                        Your order has been received and is being prepared
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl font-bold text-accent-foreground">2</span>
                      </div>
                      <h4 className="font-semibold">Cooking Started</h4>
                      <p className="text-sm text-muted-foreground">
                        Our chefs are preparing your delicious meal
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl font-bold text-primary-foreground">3</span>
                      </div>
                      <h4 className="font-semibold">On the Way</h4>
                      <p className="text-sm text-muted-foreground">
                        Your order will be delivered hot and fresh
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/home">
                    <Button variant="glass" size="lg" className="w-full sm:w-auto">
                      Order More Food
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button variant="glass" size="lg" className="w-full sm:w-auto">
                      <Home className="h-5 w-5 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
                
                <p className="text-primary-foreground/70 text-sm">
                  You'll receive SMS updates about your order status
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default ThankYou;