import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Smile, Frown, Meh, ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import restaurantBg from "@/assets/restaurant-food-bg.jpg";

interface Feedback {
  id: number;
  name: string;
  rating: number;
  emoji: string;
  comment: string;
  type: "recipe" | "restaurant";
  date: string;
}

const mockFeedback: Feedback[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    emoji: "😍",
    comment: "The fusion bowls are absolutely amazing! Perfect blend of flavors and so healthy.",
    type: "recipe",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 4,
    emoji: "👍",
    comment: "Great service and atmosphere. The spicy ramen was exactly what I needed!",
    type: "restaurant",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Priya Sharma",
    rating: 5,
    emoji: "❤️",
    comment: "Love the vegetarian options here. Every dish is crafted with so much care.",
    type: "recipe",
    date: "3 days ago"
  }
];

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    rating: 0,
    emoji: "",
    type: "recipe" as "recipe" | "restaurant"
  });
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(mockFeedback);
  const { toast } = useToast();

  const emojis = ["😍", "😊", "👍", "❤️", "🔥", "😋", "🤩", "💯"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      toast({
        title: "Please rate your experience",
        description: "Don't forget to give us a star rating!",
        variant: "destructive"
      });
      return;
    }

    const newFeedback: Feedback = {
      id: Date.now(),
      ...formData,
      date: "Just now"
    };

    setFeedbackList([newFeedback, ...feedbackList]);
    toast({
      title: "Thank you for your feedback!",
      description: "Your review has been submitted successfully.",
    });
    setFormData({
      name: "",
      comment: "",
      rating: 0,
      emoji: "",
      type: "recipe"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 ${
              star <= rating
                ? "text-accent fill-accent"
                : "text-muted-foreground"
            } ${interactive ? "cursor-pointer hover:text-accent transition-colors" : ""}`}
            onClick={interactive ? () => setFormData({ ...formData, rating: star }) : undefined}
          />
        ))}
      </div>
    );
  };

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
            <Heart className="h-16 w-16 mx-auto mb-6 animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Share Your Experience
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Your feedback helps us serve you better every day
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feedback Form */}
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Leave Your Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="transition-all duration-300 focus:shadow-card"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Feedback Type</Label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-300"
                    >
                      <option value="recipe">Recipe Experience</option>
                      <option value="restaurant">Restaurant Experience</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>Rating</Label>
                    {renderStars(formData.rating, true)}
                  </div>

                  <div className="space-y-2">
                    <Label>Emoji Reaction</Label>
                    <div className="flex flex-wrap gap-2">
                      {emojis.map((emoji) => (
                        <button
                          key={emoji}
                          type="button"
                          onClick={() => setFormData({ ...formData, emoji })}
                          className={`text-2xl p-3 rounded-lg border transition-all duration-300 ${
                            formData.emoji === emoji
                              ? "border-accent bg-accent/10 scale-110"
                              : "border-border hover:border-accent/50 hover:bg-accent/5"
                          }`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Comment</Label>
                    <Textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      placeholder="Tell us about your experience..."
                      rows={4}
                      required
                      className="transition-all duration-300 focus:shadow-card"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                  >
                    <ThumbsUp className="h-5 w-5 mr-2" />
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Feedback Display */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center mb-8">What Others Are Saying</h2>
              
              {feedbackList.map((feedback) => (
                <Card key={feedback.id} className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{feedback.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          {renderStars(feedback.rating)}
                          <span className="text-2xl">{feedback.emoji}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={feedback.type === "recipe" ? "accent" : "secondary"}>
                          {feedback.type === "recipe" ? "Recipe" : "Restaurant"}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{feedback.date}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feedback.comment}</p>
                  </CardContent>
                </Card>
              ))}

              {/* Stats */}
              <Card className="bg-gradient-accent shadow-elegant">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-accent-foreground mb-4">
                    Community Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-bold text-accent-foreground">
                        {feedbackList.length}
                      </p>
                      <p className="text-accent-foreground/80">Total Reviews</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent-foreground">
                        {(feedbackList.reduce((acc, f) => acc + f.rating, 0) / feedbackList.length).toFixed(1)}
                      </p>
                      <p className="text-accent-foreground/80">Average Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;