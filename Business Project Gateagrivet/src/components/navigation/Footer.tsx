import { NavLink } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageCircle,
  FaViber
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Gateagrivet</h3>
            <p className="mb-4 text-sm leading-relaxed">
              We provide high-quality products and services to meet your needs. Our team is dedicated to customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
               <a href="https://viber.com" target="_blank" rel="noopener noreferrer" aria-label="Viber" className="text-gray-400 hover:text-white transition-colors">
                <FaViber size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:text-white transition-colors">Home</NavLink></li>
              <li><NavLink to="/products" className="hover:text-white transition-colors">Products</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p>10:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>GATEAGRIVET INC., Univation Motor Phils. Inc. (UMPI Complex), Nissan Techno Park, Brgy. Pulong Sta. Cruz, City of Sta.Rosa, Province of Laguna, Philippines</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(+63) 9064142340 / (02) 8425-4501</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:gateagrivet.inc.2018@gmail.com" className="hover:text-white transition-colors">
                  gateagrivet.inc.2018@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Gateagrivet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;