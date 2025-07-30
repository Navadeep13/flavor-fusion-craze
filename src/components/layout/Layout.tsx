import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  isAuthenticated?: boolean;
  showNavbar?: boolean;
  showFooter?: boolean;
}

const Layout = ({ 
  children, 
  isAuthenticated = false, 
  showNavbar = true, 
  showFooter = true 
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {showNavbar && <Navbar isAuthenticated={isAuthenticated} />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;