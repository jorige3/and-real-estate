import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'framer-motion';
import { useFeaturedProperties } from '../hooks/useProperties';
import { Loader2 } from 'lucide-react';

const Home = () => {
  const { data: featuredProperties, isLoading, isError } = useFeaturedProperties();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-8">
          About AND Real Estate
        </h3>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-8">  
          AND Real Estate provides house plots, residential properties,
          warehouse leasing, construction services and loan assistance.
          Our goal is to help customers find the right property at the
          right price with complete support throughout the buying process.
        </p>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-4xl font-bold">
                Featured Properties
              </h3>
              <p className="text-gray-500 mt-2">Handpicked listings for you</p>
            </div>
            <a href="/properties" className="text-slate-900 font-semibold hover:underline">
              View All Properties &rarr;
            </a>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-slate-900" size={48} />
            </div>
          ) : isError ? (
            <div className="text-center py-20 text-red-500">
              Failed to load properties. Please try again later.
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProperties?.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16">Our Services</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Property Sales", desc: "Buy or sell house plots and residential homes." },
              { title: "Construction", desc: "Professional construction services for your dream home." },
              { title: "Warehousing", desc: "Industrial and storage solutions for your business." },
              { title: "Loan Assistance", desc: "Hassle-free support for all types of property loans." }
            ].map((service, index) => (
              <div key={index} className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
