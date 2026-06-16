import { MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const { id, title, location, price, description, image_url, property_type } = property;

  const whatsappMessage = `Hi AND Real Estate, I am interested in the property: ${title} in ${location}. Please share more details.`;
  const whatsappUrl = `https://wa.me/919533691365?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={image_url || "/images/real-estate-banner.jpg"}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {property_type}
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 truncate">
          {title}
        </h4>
        <div className="flex items-center text-gray-500 mb-2 gap-1 text-sm">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <p className="text-2xl font-bold text-slate-900 mb-3">
          {price}
        </p>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex gap-2">
          <Link 
            to={`/properties/${id}`}
            className="flex-1 bg-slate-900 text-white px-4 py-2 rounded text-center text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            View Details
          </Link>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
            title="Enquire on WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
