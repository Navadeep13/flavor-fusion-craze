import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { allRecipes, Recipe } from "@/utils/recipeData";

interface CartProps {
  cart: number[];
  setCart: (cart: number[]) => void;
  onProceedToPayment?: () => void;
}

const Cart = ({ cart, setCart, onProceedToPayment }: CartProps) => {
  const [open, setOpen] = useState(false);

  const cartItems = cart.reduce((acc, recipeId) => {
    const recipe = allRecipes.find(r => r.id === recipeId);
    if (recipe) {
      const existing = acc.find(item => item.recipe.id === recipeId);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ recipe, quantity: 1 });
      }
    }
    return acc;
  }, [] as { recipe: Recipe; quantity: number }[]);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.recipe.price * item.quantity), 0);

  const updateQuantity = (recipeId: number, change: number) => {
    const newCart = [...cart];
    if (change > 0) {
      newCart.push(recipeId);
    } else {
      const index = newCart.indexOf(recipeId);
      if (index > -1) {
        newCart.splice(index, 1);
      }
    }
    setCart(newCart);
  };

  const removeItem = (recipeId: number) => {
    setCart(cart.filter(id => id !== recipeId));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart
          {cart.length > 0 && (
            <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">
              {cart.length}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Shopping Cart</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map(({ recipe, quantity }) => (
                <Card key={recipe.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{recipe.name}</CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(recipe.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(recipe.id, -1)}
                          disabled={quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-medium">{quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(recipe.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Badge variant="secondary">₹{recipe.price * quantity}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total: ₹{totalPrice}</span>
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => {
                    setOpen(false);
                    onProceedToPayment?.();
                  }}
                >
                  Proceed to Payment
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;