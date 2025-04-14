
import React, { useState, useEffect } from "react";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 bg-white/90 backdrop-blur-sm transition-all duration-200",
      isScrolled ? "shadow-md" : "shadow-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Droplets className="h-6 w-6 md:h-8 md:w-8 text-aqua-600" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-aqua-600 to-ocean-700 bg-clip-text text-transparent">
                GESKAL
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-aqua-600 transition-colors font-medium">
                Inicio
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-aqua-600 transition-colors font-medium">
                Servicios
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-aqua-600 transition-colors font-medium">
                Productos
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-aqua-600 transition-colors font-medium">
                Nosotros
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-aqua-600 transition-colors font-medium">
                Contacto
              </Link>
              <Button className="bg-aqua-600 hover:bg-aqua-700">Solicitar Cotización</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-aqua-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-white",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-aqua-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-aqua-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            to="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-aqua-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Productos
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-aqua-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-aqua-600 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
          <div className="px-3 py-2">
            <Button className="w-full bg-aqua-600 hover:bg-aqua-700">Solicitar Cotización</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
