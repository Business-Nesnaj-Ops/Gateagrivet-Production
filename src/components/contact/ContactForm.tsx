import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
    }),
    onSubmit: async (values, { resetForm, setSubmitting, setStatus }) => {
      try {
        const response = await fetch('https://formsubmit.co/ajax/jansen.barabona@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: values.fullName,
            email: values.email,
            phone: values.phone,
            subject: values.subject,
            message: values.message,
          }),
        });

        if (response.ok) {
          resetForm();
          setStatus({ success: true });
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        setStatus({ success: false, error: 'Failed to send message. Please try again.' });
      } finally {
        setSubmitting(false);
      }
    },
  });
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      {formik.status?.success ? (
        <div className="bg-green-50 border border-sky-200 text-green-700 p-4 rounded mb-6">
          <p className="font-medium">Thank you for your message!</p>
          <p>We have received your inquiry and will respond as soon as possible.</p>
          <button
            type="button"
            onClick={() => formik.setStatus(null)}
            className="mt-2 text-sky-700 underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your full name"
                {...formik.getFieldProps('fullName')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  formik.touched.fullName && formik.errors.fullName
                    ? 'border-red-300'
                    : 'border-gray-300'
                }`}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{formik.errors.fullName}</p>
              )}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                {...formik.getFieldProps('email')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-300'
                    : 'border-gray-300'
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
              )}
            </div>
            
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(+63) (0) 9064142340"
                {...formik.getFieldProps('phone')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  formik.touched.phone && formik.errors.phone
                    ? 'border-red-300'
                    : 'border-gray-300'
                }`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="mt-1 text-sm text-red-600">{formik.errors.phone}</p>
              )}
            </div>
            
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this regarding?"
                {...formik.getFieldProps('subject')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  formik.touched.subject && formik.errors.subject
                    ? 'border-red-300'
                    : 'border-gray-300'
                }`}
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="mt-1 text-sm text-red-600">{formik.errors.subject}</p>
              )}
            </div>
          </div>
          
          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={6}
              {...formik.getFieldProps('message')}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                formik.touched.message && formik.errors.message
                  ? 'border-red-300'
                  : 'border-gray-300'
              }`}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.message}</p>
            )}
          </div>
          
          {formik.status?.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
              {formik.status.error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-sky-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 disabled:opacity-70"
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;