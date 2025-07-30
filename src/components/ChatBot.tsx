import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, Bot, User } from "lucide-react";
import { useConversation } from "@11labs/react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your cooking assistant. Ask me about recipes, ingredients, or cooking tips!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // ElevenLabs conversation hook (requires API key setup)
  const conversation = useConversation();

  const predefinedResponses: { [key: string]: string } = {
    "hello": "Hello! How can I help you with your cooking today?",
    "recipes": "I can help you find recipes based on your preferences. What type of cuisine are you in the mood for?",
    "ingredients": "Tell me what ingredients you have, and I'll suggest some delicious recipes you can make!",
    "spicy": "Looking for some heat? I recommend our Chicken Vindaloo or Spicy Dal Tadka!",
    "vegetarian": "Great choice! Try our Paneer Butter Masala or Quinoa Khichdi for healthy vegetarian options.",
    "healthy": "For healthy options, I suggest our Quinoa Khichdi, Mixed Vegetable Curry, or Grilled Chicken Salad!",
    "quick": "Need something quick? Our Maggi Masala or Vegetable Fried Rice can be ready in 15 minutes!",
    "party": "Planning a party? Our Mini Samosa Platter and Chicken Biryani are crowd favorites!",
    "help": "I can help you with: finding recipes, cooking tips, ingredient substitutions, and nutritional information!",
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    return "I'm here to help with cooking! Try asking about recipes, ingredients, or specific cuisines. You can also ask for 'spicy', 'vegetarian', 'healthy', or 'quick' recommendations!";
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Bot className="h-5 w-5 mr-2 text-primary" />
            Cooking Assistant
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-3 p-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <Card className={`max-w-[80%] ${message.isBot ? 'bg-muted' : 'bg-primary text-primary-foreground'}`}>
                <CardContent className="p-3">
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm">{message.text}</p>
                    {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <Card className="bg-muted">
                <CardContent className="p-3">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
        
        <div className="flex space-x-2 pt-3 border-t">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about recipes..."
            className="flex-1"
          />
          <Button onClick={sendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBot;