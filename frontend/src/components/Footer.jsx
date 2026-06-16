import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-8">
          Contact Us
        </h3>

        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center gap-3 text-lg">
            <Phone className="text-yellow-400" size={24} />
            <span>+91 9533691365</span>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <MapPin className="text-yellow-400" size={24} />
            <span>Ongole, Andhra Pradesh</span>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <Mail className="text-yellow-400" size={24} />
            <span>info@andrealestate.com</span>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} AND Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
