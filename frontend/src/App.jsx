function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            AND Real Estate
          </h1>

          <nav className="flex gap-8">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">Properties</a>
            <a href="#" className="hover:text-yellow-400">Services</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
          </nav>
        </div>
      </header>

      

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
            <button className="bg-slate-900 text-white px-6 py-3 rounded-lg">
              View Properties
            </button>

            <button className="border border-slate-900 px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
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

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">
            Featured Properties
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-slate-300"></div>

              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">
                  Residential Plot
                </h4>

                <p className="text-gray-600 mb-4">
                  Prime location with road access.
                </p>

                <button className="bg-slate-900 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-slate-300"></div>

              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">
                  Independent House
                </h4>

                <p className="text-gray-600 mb-4">
                  Spacious family home with modern design.
                </p>

                <button className="bg-slate-900 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-slate-300"></div>

              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">
                  Warehouse
                </h4>

                <p className="text-gray-600 mb-4">
                  Warehouse available for rent and lease.
                </p>

                <button className="bg-slate-900 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
            
    </div>
  )
}

export default App
