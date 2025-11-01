
import React from 'react';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-serif font-bold text-center mb-4 text-brand-black">Get in Touch</h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="lg:w-1/3 bg-brand-black text-white p-8 space-y-8">
            <h2 className="text-3xl font-serif text-gold">Contact Information</h2>
            <p className="text-gray-300">Fill up the form and our Team will get back to you within 24 hours.</p>
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-6 w-6 text-gold" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MailIcon className="h-6 w-6 text-gold" />
              <span className="text-gray-300">hello@fiara.com</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-gold text-brand-black font-bold py-3 px-6 rounded-md hover:bg-yellow-300 transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
