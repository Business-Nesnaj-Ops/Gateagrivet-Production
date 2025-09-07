import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

// Custom Viber icon component
const ViberIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 7.33c-.18-.8-.64-1.26-1.44-1.44-.24-.05-.48-.09-.73-.12-.23-.03-.47-.05-.7-.06-.24-.01-.48-.01-.72 0-.47.02-.94.07-1.4.15-.46.08-.9.19-1.33.33-.21.07-.42.15-.62.24-.2.09-.39.19-.57.3-.36.22-.68.49-.94.81-.13.16-.24.33-.33.51-.09.18-.16.37-.21.56-.1.38-.15.77-.15 1.16 0 .2.01.4.03.6.02.2.05.4.09.59.08.39.2.77.36 1.13.16.36.36.7.6 1.01.24.31.52.59.83.83.31.24.65.44 1.01.6.36.16.74.28 1.13.36.19.04.39.07.59.09.2.02.4.03.6.03.39 0 .78-.05 1.16-.15.19-.05.38-.12.56-.21.18-.09.35-.2.51-.33.32-.26.59-.58.81-.94.11-.18.21-.37.3-.57.09-.2.17-.41.24-.62.14-.43.25-.87.33-1.33.08-.46.13-.93.15-1.4.01-.24.01-.48 0-.72-.01-.23-.03-.47-.06-.7-.03-.25-.07-.49-.12-.73-.18-.8-.64-1.26-1.44-1.44z"/>

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
                <ViberIcon size={20} />
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
                <span>Univation Motor Phils. Inc. (UMPI Complex),Nissan Techno Park,Brgy. Pulong Sta. Cruz,City of Sta. Rosa, Province of</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(+63) 9064142340</span>
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