
import React from "react";
import { Link } from "react-router-dom";
import { Droplets, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-gradient-to-r from-ocean-800 to-aqua-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplets className="h-6 w-6 md:h-8 md:w-8 text-aqua-300" />
              <span className="text-lg md:text-xl font-bold text-white">GESKAL</span>
            </div>
            <p className="text-gray-300 text-xs md:text-sm mt-2 mb-4">
              Proporcionamos soluciones innovadoras para tratamiento de agua que mantienen su agua limpia, segura y ambientalmente amigable.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-aqua-200">Servicios</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to="/services#water-treatment" className="text-gray-300 hover:text-white transition-colors">
                  Tratamiento de Agua
                </Link>
              </li>
              <li>
                <Link to="/services#disinfection" className="text-gray-300 hover:text-white transition-colors">
                  Sistemas de Desinfección
                </Link>
              </li>
              <li>
                <Link to="/services#bioremediation" className="text-gray-300 hover:text-white transition-colors">
                  Biorremediación
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="text-gray-300 hover:text-white transition-colors">
                  Mantenimiento y Soporte
                </Link>
              </li>
              <li>
                <Link to="/services#consultation" className="text-gray-300 hover:text-white transition-colors">
                  Consultoría de Calidad de Agua
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-aqua-200">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-aqua-200">Contáctenos</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-aqua-300 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Calle del Agua, Agua Clara, CA 94103
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-aqua-300 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-aqua-300 flex-shrink-0" />
                <span className="text-gray-300">info@geskal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} GESKAL Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
