import { motion } from 'framer-motion';
import { Home, Construction, Warehouse, Landmark } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Real Estate Sales",
      description: "We help you find the perfect house plots and residential properties in prime locations across Andhra Pradesh.",
      icon: <Home className="w-12 h-12 text-slate-900" />,
      features: ["Verified Titles", "Prime Locations", "Market Competitive Prices"]
    },
    {
      title: "Construction Services",
      description: "From planning to execution, we provide end-to-end construction services for your dream home or commercial space.",
      icon: <Construction className="w-12 h-12 text-slate-900" />,
      features: ["Architectural Planning", "Quality Materials", "Timely Delivery"]
    },
    {
      title: "Warehousing Solutions",
      description: "Large-scale industrial warehouses available for rent, lease, or sale in strategically located industrial zones.",
      icon: <Warehouse className="w-12 h-12 text-slate-900" />,
      features: ["Large Storage Capacity", "Easy Accessibility", "Secure Facilities"]
    },
    {
      title: "Loan Assistance",
      description: "Our experts help you navigate through the home loan process with various banks for a hassle-free experience.",
      icon: <Landmark className="w-12 h-12 text-slate-900" />,
      features: ["Multiple Bank Options", "Low Interest Rates", "Quick Documentation"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing comprehensive real estate and infrastructure solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start gap-6 hover:shadow-md transition-shadow">
              <div className="p-4 bg-slate-50 rounded-2xl">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-slate-900 font-semibold">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
