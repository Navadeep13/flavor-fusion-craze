import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { allRecipes } from "@/utils/recipeData";
import Cart from "@/components/Cart";
import PaymentModal from "@/components/PaymentModal";
import ChatBot from "@/components/ChatBot";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cart, setCart] = useState<number[]>([]);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (recipeId: number) => {
    setCart([...cart, recipeId]);
    toast({
      title: "Added to cart!",
      description: "Recipe has been added to your cart.",
    });
  };

  const getTotalAmount = () => {
    return cart.reduce((total, recipeId) => {
      const recipe = allRecipes.find(r => r.id === recipeId);
      return total + (recipe?.price || 0);
    }, 0);
  };

  const handlePaymentComplete = () => {
    setCart([]);
    toast({
      title: "Order Confirmed!",
      description: "Your delicious recipes are on their way!",
    });
  };

  const getCurrentRecipes = () => {
    // Filter by search query if provided
    if (searchQuery.trim()) {
      return allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    
    // Return all recipes if no search
    return allRecipes;
  };

  return (
    <Layout isAuthenticated={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card/30">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 px-4">
          <div className="max-w-7xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Recipe Discovery Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Find the perfect recipe based on your preferences and mood
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/60 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for recipes, ingredients, or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-background/90 backdrop-blur-md border border-border/50 text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>
          </div>
        </section>

        {/* Recipes Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Recipe Collection</h2>
              <p className="text-muted-foreground text-lg">
                Discover {allRecipes.length} delicious recipes from around the world
              </p>
            </div>

            {/* Cart Info */}
            {cart.length > 0 && (
              <div className="mb-8 text-center">
                <Cart 
                  cart={cart} 
                  setCart={setCart} 
                  onProceedToPayment={() => setPaymentModalOpen(true)}
                />
              </div>
            )}

            {/* Recipe Grid */}
            {getCurrentRecipes().length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCurrentRecipes().map((recipe) => (
                  <Card 
                    key={recipe.id} 
                    className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
                  >
                    <CardHeader className="text-center">
                      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={recipe.image} 
                          alt={recipe.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {recipe.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{recipe.calories} kcal</Badge>
                        <Badge variant="accent">₹{recipe.price}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => addToCart(recipe.id)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Link to={`/recipe/${recipe.id}`} className="flex-1">
                        <Button variant="hero" size="sm" className="w-full">
                          <Eye className="h-4 w-4 mr-2" />
                          Explore
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!searchQuery.trim() && getCurrentRecipes().length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">Welcome to our Recipe Collection!</h3>
                <p className="text-muted-foreground mb-8">Browse through our delicious recipes or use the search bar to find something specific.</p>
              </div>
            )}

            {/* No Results State */}
            {searchQuery.trim() && getCurrentRecipes().length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">No recipes found</h3>
                <p className="text-muted-foreground mb-8">
                  No recipes match "{searchQuery}". Try a different search term.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
      
      {/* Payment Modal */}
      <PaymentModal
        open={paymentModalOpen}
        onOpenChange={setPaymentModalOpen}
        totalAmount={getTotalAmount()}
        onPaymentComplete={handlePaymentComplete}
      />
      
      {/* ChatBot */}
      <ChatBot />
    </Layout>
  );
};

export default Home;