import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Truck, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalAmount: number;
  onPaymentComplete: () => void;
}

const PaymentModal = ({ open, onOpenChange, totalAmount, onPaymentComplete }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState("qr");
  const [processing, setProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: ""
  });
  const { toast } = useToast();

  const handlePayment = async () => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onPaymentComplete();
      onOpenChange(false);
      toast({
        title: "Payment Successful!",
        description: `Your order of ₹${totalAmount} has been confirmed.`,
      });
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Choose Payment Method</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Total: ₹{totalAmount}
            </Badge>
          </div>

          <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="qr">
                <QrCode className="h-4 w-4 mr-2" />
                UPI
              </TabsTrigger>
              <TabsTrigger value="card">
                <CreditCard className="h-4 w-4 mr-2" />
                Card
              </TabsTrigger>
              <TabsTrigger value="cod">
                <Truck className="h-4 w-4 mr-2" />
                COD
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="qr">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">UPI Payment</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="bg-white p-4 rounded-lg mx-auto w-fit">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=merchant@paytm&pn=CookConnect&am=${totalAmount}&cu=INR&tn=Food%20Order%20Payment"
                      alt="UPI Payment QR Code"
                      className="w-48 h-48"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scan with any UPI app (PhonePe, GPay, Paytm) to pay ₹{totalAmount}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    UPI ID: merchant@paytm
                  </div>
                  <Button 
                    onClick={handlePayment} 
                    disabled={processing}
                    className="w-full"
                  >
                    {processing ? "Processing..." : "I've Paid"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="card">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Credit/Debit Card</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardDetails.cardNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
                        if (value.length <= 19) {
                          setCardDetails({ ...cardDetails, cardNumber: value });
                        }
                      }}
                      maxLength={19}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={cardDetails.expiryDate}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
                          if (value.length <= 5) {
                            setCardDetails({ ...cardDetails, expiryDate: value });
                          }
                        }}
                        maxLength={5}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={cardDetails.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 3) {
                            setCardDetails({ ...cardDetails, cvv: value });
                          }
                        }}
                        maxLength={3}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardholderName">Cardholder Name</Label>
                    <Input
                      id="cardholderName"
                      placeholder="John Doe"
                      value={cardDetails.cardholderName}
                      onChange={(e) => setCardDetails({ ...cardDetails, cardholderName: e.target.value })}
                    />
                  </div>
                  <Button 
                    onClick={handlePayment} 
                    disabled={processing || !cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv || !cardDetails.cardholderName}
                    className="w-full"
                  >
                    {processing ? "Processing Payment..." : `Pay ₹${totalAmount}`}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cod">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Cash on Delivery</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex items-center justify-center">
                    <Truck className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Pay ₹{totalAmount} when your order arrives at your doorstep
                  </p>
                  <Button 
                    onClick={handlePayment} 
                    disabled={processing}
                    className="w-full"
                  >
                    {processing ? "Confirming Order..." : "Confirm Order"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;