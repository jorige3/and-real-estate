import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Ruler, Bed, Bath, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const allProperties = [
  {
    id: 1,
    title: "Residential Plot",
    location: "Ongole, Andhra Pradesh",
    price: "₹15 Lakhs",
    description: "Prime location with road access and clear titles. Ideal for building your dream home in a rapidly developing area.",
    image_url: "/images/real-estate-banner.jpg",
    property_type: "Plot",
    area: "1200 sq.ft",
    features: ["Corner Plot", "East Facing", "40ft Road"]
  },
  {
    id: 2,
    title: "Independent House",
    location: "Kandukur, Andhra Pradesh",
    price: "₹45 Lakhs",
    description: "Spacious 3BHK family home with modern design and parking. Features a large living room, modular kitchen, and private terrace.",
    image_url: null,
    property_type: "House",
    area: "1800 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    features: ["Garden", "Car Parking", "Water Supply"]
  }
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = allProperties.find(p => p.id === Number(id));

  if (!property) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Property not found</h2>
        <Link to="/properties" className="text-slate-900 underline mt-4 inline-block">Back to listings</Link>
      </div>
    );
  }

  const whatsappMessage = `Hi AND Real Estate, I am interested in the property: ${property.title} (ID: ${property.id}). Please share more details.`;
  const whatsappUrl = `https://wa.me/919533691365?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-20"
    >
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/properties" className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} />
            Back to Properties
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {property.property_type}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4">{property.title}</h1>
              <div className="flex items-center gap-2 text-slate-400 mt-2">
                <MapPin size={20} />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm uppercase font-bold tracking-widest">Price</p>
              <p className="text-4xl font-bold text-yellow-400">{property.price}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden shadow-inner">
            <img 
              src={property.image_url || "/images/real-estate-banner.jpg"} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center">
              <Ruler className="text-slate-900 mb-2" />
              <span className="text-sm text-gray-500">Area</span>
              <span className="font-bold">{property.area}</span>
            </div>
            {property.bedrooms && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center">
                <Bed className="text-slate-900 mb-2" />
                <span className="text-sm text-gray-500">Bedrooms</span>
                <span className="font-bold">{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center">
                <Bath className="text-slate-900 mb-2" />
                <span className="text-sm text-gray-500">Bathrooms</span>
                <span className="font-bold">{property.bathrooms}</span>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Description</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {property.description}
            </p>
          </div>

          {property.features && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Features</h3>
              <ul className="grid grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 sticky top-28">
            <h3 className="text-xl font-bold mb-6">Interested in this property?</h3>
            
            <div className="space-y-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-green-600 transition-colors shadow-lg shadow-green-200"
              >
                <MessageCircle size={24} />
                Enquire on WhatsApp
              </a>

              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors">
                <Phone size={22} />
                Call Agent
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <h4 className="font-bold mb-2">Agent Details</h4>
              <p className="text-gray-600">AND Real Estate Team</p>
              <p className="text-slate-900 font-bold mt-1">+91 9533691365</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyDetails;
