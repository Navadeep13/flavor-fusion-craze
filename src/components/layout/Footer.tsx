import { Instagram, Twitter, Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CraveCraze SRTB Fusion
            </h3>
            <p className="text-muted-foreground">
              Discover amazing recipes and order delicious food with our fusion cuisine experience.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Gachibowli, Hyderabad</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>6:00 AM – 11:00 PM</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>0123456789</span>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Find Us</h4>
            <div className="rounded-lg overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.721126327841!2d78.34881031490654!3d17.440794688045334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647234567890!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CraveCraze Location"
              ></iframe>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-primary rounded-full text-primary-foreground hover:scale-110 transition-all duration-300 shadow-card hover:shadow-glow"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-primary rounded-full text-primary-foreground hover:scale-110 transition-all duration-300 shadow-card hover:shadow-glow"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@cravecraze.com"
                className="p-3 bg-gradient-primary rounded-full text-primary-foreground hover:scale-110 transition-all duration-300 shadow-card hover:shadow-glow"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Follow us for the latest recipes, food tips, and special offers!
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 CraveCraze SRTB Fusion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;