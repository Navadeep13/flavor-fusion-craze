import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, Users, Flame, Heart, ShoppingCart, Play } from "lucide-react";
import { getRecipeById, Recipe } from "@/utils/recipeData";
import restaurantBg from "@/assets/restaurant-food-bg.jpg";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id) {
      const foundRecipe = getRecipeById(parseInt(id));
      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        // If recipe not found, redirect to home
        navigate("/home");
      }
    }
  }, [id, navigate]);

  if (!recipe) {
    return (
      <Layout isAuthenticated={true}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
            <Link to="/home">
              <Button variant="hero">Back to Home</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const totalCalories = recipe.ingredients.reduce((sum, ingredient) => sum + ingredient.calories, 0);

  return (
    <Layout isAuthenticated={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card/30">
        {/* Hero Section with Background */}
        <section 
          className="bg-gradient-hero py-8 px-4 relative bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${restaurantBg})` 
          }}
        >
          <div className="max-w-4xl mx-auto">
            <Link to="/home">
              <Button variant="ghost" className="text-primary-foreground hover:bg-white/20 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Recipes
              </Button>
            </Link>
            <div className="text-center text-primary-foreground">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{recipe.name}</h1>
              <p className="text-lg md:text-xl opacity-90">
                Discover the perfect recipe for your taste
              </p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="p-4" style={{ display: 'none' }}>
          <Link to="/home">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Recipes
            </Button>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          {/* Recipe Header */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-card shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.name}</h1>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge variant="accent">{recipe.category}</Badge>
                  <Badge variant="secondary">{recipe.difficulty}</Badge>
                  <Badge variant="outline">{totalCalories} kcal</Badge>
                </div>
                <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Flame className="h-4 w-4" />
                    <span>{recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{recipe.servingSize} servings</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Health Advantages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recipe.healthAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>{advantage}</span>
                  </div>
                ))}
                <Separator className="my-6" />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold">₹{recipe.price}</p>
                    <p className="text-sm text-muted-foreground">Per serving</p>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Link to={`/order/${recipe.id}`}>
                      <Button variant="hero">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Order Online
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ingredients & Instructions */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Ingredients */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Ingredients</CardTitle>
                <p className="text-muted-foreground">Serving size: {recipe.servingSize} people</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div>
                        <p className="font-medium">{ingredient.name}</p>
                        <p className="text-sm text-muted-foreground">{ingredient.quantity}</p>
                      </div>
                      <Badge variant="outline">{ingredient.calories} kcal</Badge>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="text-center">
                  <p className="text-lg font-semibold">Total: {totalCalories} calories</p>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Cooking Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="pt-1 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video & Tips */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* YouTube Video */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Video Tutorial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Watch step-by-step cooking tutorial</p>
                    <Button variant="hero" className="mt-4">
                      <Play className="h-4 w-4 mr-2" />
                      Play Video
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Learn from our expert chefs with detailed video instructions
                </p>
              </CardContent>
            </Card>

            {/* Cooking Tips */}
            <Card className="bg-gradient-accent shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-accent-foreground">Message for the Cook</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recipe.cookTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-accent-foreground/90">{tip}</p>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-accent-foreground/10 rounded-lg">
                  <p className="text-accent-foreground font-medium text-center">
                    💡 Pro Tip: Cooking is an art - feel free to adjust ingredients to your taste!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetails;