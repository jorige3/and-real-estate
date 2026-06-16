import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          AND Real Estate
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link to="/properties" className="hover:text-yellow-400 transition-colors">Properties</Link>
          <Link to="/services" className="hover:text-yellow-400 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
        </nav>
        
        {/* Mobile menu button could go here */}
      </div>
    </header>
  );
};

export default Navbar;
