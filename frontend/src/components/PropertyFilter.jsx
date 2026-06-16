const PropertyFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-12 grid md:grid-cols-3 gap-4 border border-slate-100">
      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase">Location</label>
        <input 
          type="text" 
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="e.g. Ongole" 
          className="w-full border border-slate-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase">Property Type</label>
        <select 
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="w-full border border-slate-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none"
        >
          <option value="">All Types</option>
          <option value="Plot">Plot</option>
          <option value="House">House</option>
          <option value="Warehouse">Warehouse</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase">Price Range</label>
        <select 
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          className="w-full border border-slate-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none"
        >
          <option value="">Any Price</option>
          <option value="0-2000000">Under ₹20 Lakhs</option>
          <option value="2000000-5000000">₹20 Lakhs - ₹50 Lakhs</option>
          <option value="5000000-10000000">₹50 Lakhs - ₹1 Cr</option>
          <option value="10000000+">Above ₹1 Cr</option>
        </select>
      </div>
    </div>
  );
};

export default PropertyFilter;
