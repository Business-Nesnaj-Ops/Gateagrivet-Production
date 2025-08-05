import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start">
          <div className="bg-sky-100 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-sky-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Our Location</h3>
            <p className="text-gray-700">Univation Motor Phils. Inc. (UMPI Complex)</p>
            <p className="text-gray-700">Nissan Techno Park</p>
            <p className="text-gray-700">Brgy. Pulong Sta. Cruz</p>
            <p className="text-gray-700">City of Sta. Rosa</p>
            <p className="text-gray-700">Province of Laguna</p>
            <p className="text-gray-700">Philippines</p>
          </div>
        </div>
        
        {/* Phone */}
        <div className="flex items-start">
          <div className="bg-sky-100 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-sky-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Phone Number</h3>
            <p className="text-gray-700">+1 (555) 123-4567</p>
            <p className="text-gray-700">+1 (555) 987-6543</p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex items-start">
          <div className="bg-sky-100 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-sky-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Email Address</h3>
            <p className="text-gray-700">info@gateagrivet.com</p>
            <p className="text-gray-700">support@gateagrivet.com</p>
          </div>
        </div>
        
        {/* Opening Hours */}
        <div className="flex items-start">
          <div className="bg-sky-100 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-sky-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Opening Hours</h3>
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      {/* Chat buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full sm:w-auto"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>
        <a
          href="https://m.me/Gateagrivet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full sm:w-auto"
        >
          <MessageCircle size={20} />
          Chat on Messenger
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;