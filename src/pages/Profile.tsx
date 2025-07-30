import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, MapPin, Phone, Calendar, Heart, ShoppingCart, Star } from "lucide-react";
import restaurantBg from "@/assets/restaurant-food-bg.jpg";
import EditProfileModal from "@/components/EditProfileModal";
import ChangePasswordModal from "@/components/ChangePasswordModal";

const Profile = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  
  // Mock user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    address: "Gachibowli, Hyderabad",
    memberSince: "January 2024",
    avatar: "",
    favoriteRecipes: 15,
    totalOrders: 23,
    loyaltyPoints: 450
  });

  const recentOrders = [
    { id: 1, recipe: "Spicy Paneer Tikka", date: "2025-01-25", status: "Delivered", amount: 299 },
    { id: 2, recipe: "Dragon Chicken", date: "2025-01-22", status: "Delivered", amount: 449 },
    { id: 3, recipe: "Quinoa Buddha Bowl", date: "2025-01-20", status: "Delivered", amount: 349 }
  ];

  const favoriteRecipes = [
    { id: 1, name: "Spicy Korean Ramen", rating: 5, category: "Spicy" },
    { id: 2, name: "Avocado Toast Supreme", rating: 4, category: "Healthy" },
    { id: 3, name: "Chocolate Brownie", rating: 5, category: "Comfort" }
  ];

  return (
    <Layout isAuthenticated={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card/30">
        {/* Hero Section */}
        <section 
          className="bg-gradient-hero py-16 px-4 relative bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${restaurantBg})` 
          }}
        >
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <User className="h-16 w-16 mx-auto mb-6 animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My Profile
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Manage your account and track your culinary journey
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
          {/* Profile Info */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Profile Card */}
            <Card className="lg:col-span-2 bg-gradient-card shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-primary-foreground">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">{user.name}</h2>
                    <div className="flex items-center space-x-2">
                      <Badge variant="accent">Food Enthusiast</Badge>
                      <Badge variant="secondary">Premium Member</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{user.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">{user.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="font-medium">{user.memberSince}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant="hero" 
                    className="mr-4"
                    onClick={() => setShowEditProfile(true)}
                  >
                    Edit Profile
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowChangePassword(true)}
                  >
                    Change Password
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="bg-gradient-accent shadow-elegant">
              <CardHeader>
                <CardTitle className="text-accent-foreground text-center">Account Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Heart className="h-5 w-5 text-accent-foreground" />
                    <p className="text-3xl font-bold text-accent-foreground">{user.favoriteRecipes}</p>
                  </div>
                  <p className="text-accent-foreground/80">Favorite Recipes</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <ShoppingCart className="h-5 w-5 text-accent-foreground" />
                    <p className="text-3xl font-bold text-accent-foreground">{user.totalOrders}</p>
                  </div>
                  <p className="text-accent-foreground/80">Total Orders</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-accent-foreground" />
                    <p className="text-3xl font-bold text-accent-foreground">{user.loyaltyPoints}</p>
                  </div>
                  <p className="text-accent-foreground/80">Loyalty Points</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders */}
          <Card className="bg-gradient-card shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">🍽️</div>
                      <div>
                        <p className="font-semibold">{order.recipe}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        {order.status}
                      </Badge>
                      <p className="font-bold">₹{order.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button variant="outline">View All Orders</Button>
              </div>
            </CardContent>
          </Card>

          {/* Favorite Recipes */}
          <Card className="bg-gradient-card shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Favorite Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {favoriteRecipes.map((recipe) => (
                  <div key={recipe.id} className="p-4 bg-background/50 rounded-lg text-center">
                    <div className="text-4xl mb-3">❤️</div>
                    <h3 className="font-semibold mb-2">{recipe.name}</h3>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < recipe.rating ? "text-accent fill-accent" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {recipe.category}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button variant="outline">View All Favorites</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <EditProfileModal
        open={showEditProfile}
        onOpenChange={setShowEditProfile}
        user={user}
        onSave={(updatedUser) => setUser({ ...user, ...updatedUser })}
      />

      <ChangePasswordModal
        open={showChangePassword}
        onOpenChange={setShowChangePassword}
      />
    </Layout>
  );
};

export default Profile;