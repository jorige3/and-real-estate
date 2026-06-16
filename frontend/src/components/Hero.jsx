import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Find Your Dream Property
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          House Plots, Residential Homes, Warehouses,
          Construction Services and Loan Assistance.
        </p>

        <div className="flex justify-center gap-4">
          <Link 
            to="/properties" 
            className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            View Properties
          </Link>

          <Link 
            to="/contact" 
            className="border border-slate-900 px-6 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
