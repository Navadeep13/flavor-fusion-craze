import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="qr">
                <QrCode className="h-4 w-4 mr-2" />
                QR Pay
              </TabsTrigger>
              <TabsTrigger value="cod">
                <Truck className="h-4 w-4 mr-2" />
                COD
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="qr">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Scan QR Code</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-lg">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-sm ${
                            Math.random() > 0.5 ? 'bg-foreground' : 'bg-background'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scan with any UPI app to pay ₹{totalAmount}
                  </p>
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