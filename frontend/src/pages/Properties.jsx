import { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import { motion } from 'framer-motion';
import { useProperties } from '../hooks/useProperties';
import { Loader2 } from 'lucide-react';

const Properties = () => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    priceRange: ''
  });

  // Map frontend filters to API params
  const apiParams = useMemo(() => {
    const params = {};
    if (filters.location) params.location = filters.location;
    if (filters.type) params.property_type = filters.type;
    return params;
  }, [filters]);

  const { data: properties, isLoading, isError } = useProperties(apiParams);

  // Client-side price filtering (since backend doesn't handle it yet)
  const filteredProperties = useMemo(() => {
    if (!properties) return [];
    return properties.filter(property => {
      let matchPrice = true;
      if (filters.priceRange) {
        // Simple numeric extractor for price_value if it's missing
        const priceValue = property.price_value || 0;
        const [min, max] = filters.priceRange.split('-').map(v => v === '+' ? Infinity : Number(v));
        if (max === undefined) {
          matchPrice = priceValue >= 10000000;
        } else {
          matchPrice = priceValue >= min && priceValue <= max;
        }
      }
      return matchPrice;
    });
  }, [properties, filters.priceRange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-12 bg-slate-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">All Properties</h2>
        
        <PropertyFilter filters={filters} setFilters={setFilters} />

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-slate-900" size={48} />
          </div>
        ) : isError ? (
          <div className="text-center py-20 text-red-500">
            Failed to load properties. Please try again later.
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-100">
            <p className="text-gray-500 text-lg">No properties match your criteria.</p>
            <button 
              onClick={() => setFilters({ location: '', type: '', priceRange: '' })}
              className="mt-4 text-slate-900 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Properties;
