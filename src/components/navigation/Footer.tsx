import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

// Custom Viber icon component
const ViberIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.398.002C9.473.028 5.331.344 3.014 3.467 1.294 5.64.84 8.649.84 11.936c0 3.287.454 6.296 2.174 8.468.616.78 1.411 1.284 2.31 1.467.899.184 1.926-.077 2.643-.77l.447-.447c.4-.4.615-.943.615-1.513 0-.57-.215-1.113-.615-1.513l-1.347-1.347c-.4-.4-.943-.615-1.513-.615-.57 0-1.113.215-1.513.615-.4.4-.615.943-.615 1.513 0 .57.215 1.113.615 1.513l.447.447c.717.693 1.744.954 2.643.77.899-.183 1.694-.687 2.31-1.467 1.72-2.172 2.174-5.181 2.174-8.468 0-3.287-.454-6.296-2.174-8.469C18.669.344 14.527.028 12.602.002h-.604z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">GateAgriVet</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of agricultural and veterinary solutions, committed to supporting farmers and animal health professionals with quality products and services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
               {/*<a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <ViberIcon className="w-6 h-6" />
              </a>*/}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-gray-300">123 Agriculture St, Farm City</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-gray-300">info@gateagrivet.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 GateAgriVet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;