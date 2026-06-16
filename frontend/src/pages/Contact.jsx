import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { inquiryService } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await inquiryService.create(formData);
      setSubmitted(true);
      setFormData({ name: '', phone: '', subject: 'General Inquiry', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Have questions about a property or our services? Get in touch with us today.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-lg text-slate-900">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-gray-600">+91 9533691365</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-lg text-slate-900">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold">Address</h4>
                <p className="text-gray-600">Ongole, Andhra Pradesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-lg text-slate-900">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-600">info@andrealestate.com</p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-green-800 font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-4 border border-slate-100">
                {error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">{error}</div>}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-slate-200 px-4 py-2 rounded-lg" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-slate-200 px-4 py-2 rounded-lg" 
                      placeholder="Phone Number" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-slate-200 px-4 py-2 rounded-lg"
                  >
                    <option>General Inquiry</option>
                    <option>Buying Property</option>
                    <option>Construction Services</option>
                    <option>Loan Assistance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full border border-slate-200 px-4 py-2 rounded-lg" 
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-70"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
