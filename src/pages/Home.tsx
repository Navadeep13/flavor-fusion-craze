import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Mock recipe data
const recipesByChoice = {
  vegetarian: [
    { id: 1, name: "Spicy Paneer Tikka", calories: 320, price: 299, image: "🧀", category: "vegetarian" },
    { id: 2, name: "Quinoa Buddha Bowl", calories: 280, price: 349, image: "🥗", category: "vegetarian" },
    { id: 3, name: "Mushroom Risotto", calories: 410, price: 399, image: "🍄", category: "vegetarian" },
  ],
  spicy: [
    { id: 4, name: "Dragon Chicken", calories: 450, price: 449, image: "🐔", category: "spicy" },
    { id: 5, name: "Jalapeño Poppers", calories: 220, price: 199, image: "🌶️", category: "spicy" },
    { id: 6, name: "Spicy Korean Ramen", calories: 380, price: 299, image: "🍜", category: "spicy" },
  ],
  healthy: [
    { id: 7, name: "Grilled Salmon Bowl", calories: 340, price: 549, image: "🐟", category: "healthy" },
    { id: 8, name: "Avocado Toast Supreme", calories: 250, price: 249, image: "🥑", category: "healthy" },
    { id: 9, name: "Green Smoothie Bowl", calories: 180, price: 199, image: "🥬", category: "healthy" },
  ]
};

const recipesByMood = {
  happy: [
    { id: 10, name: "Rainbow Pasta", calories: 390, price: 329, image: "🌈", category: "happy" },
    { id: 11, name: "Celebration Cake", calories: 520, price: 599, image: "🎂", category: "happy" },
    { id: 12, name: "Sunshine Smoothie", calories: 160, price: 179, image: "☀️", category: "happy" },
  ],
  lazy: [
    { id: 13, name: "One-Pot Mac & Cheese", calories: 480, price: 299, image: "🧀", category: "lazy" },
    { id: 14, name: "Microwave Mug Cake", calories: 290, price: 149, image: "☕", category: "lazy" },
    { id: 15, name: "Instant Noodle Upgrade", calories: 350, price: 199, image: "🍜", category: "lazy" },
  ],
  sad: [
    { id: 16, name: "Comfort Chicken Soup", calories: 280, price: 249, image: "🍲", category: "sad" },
    { id: 17, name: "Chocolate Brownie", calories: 420, price: 199, image: "🍫", category: "sad" },
    { id: 18, name: "Warm Apple Pie", calories: 380, price: 299, image: "🥧", category: "sad" },
  ],
  party: [
    { id: 19, name: "Mini Sliders Platter", calories: 450, price: 699, image: "🍔", category: "party" },
    { id: 20, name: "Cocktail Prawns", calories: 220, price: 599, image: "🦐", category: "party" },
    { id: 21, name: "Party Mix Nachos", calories: 510, price: 399, image: "🌮", category: "party" },
  ]
};

const Home = () => {
  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (recipeId: number) => {
    setCart([...cart, recipeId]);
  };

  const getCurrentRecipes = () => {
    if (selectedChoice && recipesByChoice[selectedChoice as keyof typeof recipesByChoice]) {
      return recipesByChoice[selectedChoice as keyof typeof recipesByChoice];
    }
    if (selectedMood && recipesByMood[selectedMood as keyof typeof recipesByMood]) {
      return recipesByMood[selectedMood as keyof typeof recipesByMood];
    }
    return [];
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
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search for recipes, ingredients, or cuisines..."
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-background/90 backdrop-blur-md border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Choose by Choice */}
              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Choose by Choice</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedChoice} onValueChange={setSelectedChoice}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your dietary preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vegetarian">🥬 Vegetarian</SelectItem>
                      <SelectItem value="spicy">🌶️ Spicy</SelectItem>
                      <SelectItem value="healthy">💚 Healthy</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Choose by Mood */}
              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Choose by Mood</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedMood} onValueChange={setSelectedMood}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="How are you feeling today?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="happy">😊 Happy</SelectItem>
                      <SelectItem value="lazy">😴 Lazy</SelectItem>
                      <SelectItem value="sad">😢 Sad</SelectItem>
                      <SelectItem value="party">🎉 Party</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>

            {/* Cart Info */}
            {cart.length > 0 && (
              <div className="mb-8 text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {cart.length} items in cart
                </Badge>
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
                      <div className="text-6xl mb-4 group-hover:animate-bounce-gentle">
                        {recipe.image}
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
            {!selectedChoice && !selectedMood && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">Ready to discover amazing recipes?</h3>
                <p className="text-muted-foreground mb-8">Choose your preference or mood to get started!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;