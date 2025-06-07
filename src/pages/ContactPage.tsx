import { useEffect } from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import GoogleMap from '../components/contact/GoogleMap';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Gateagrivet - Contact Us';
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
           <h1 class="hidden">Gateagrivet</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          {/* Contact information & Map */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Contact Information</h2>
            <ContactInfo />
            
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;