import AdminLayout from '../components/AdminLayout';
import { useProperties } from '../hooks/useProperties';
import { Building2, Users, MessageSquare, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const { data: properties } = useProperties();

  const stats = [
    { label: 'Total Properties', value: properties?.length || 0, icon: <Building2 className="text-blue-600" />, bg: 'bg-blue-50' },
    { label: 'Active Leads', value: 12, icon: <MessageSquare className="text-green-600" />, bg: 'bg-green-50' },
    { label: 'Total Inquiries', value: 48, icon: <Users className="text-purple-600" />, bg: 'bg-purple-50' },
    { label: 'Views This Month', value: '1.2k', icon: <TrendingUp className="text-orange-600" />, bg: 'bg-orange-50' },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-gray-500 mt-1">Quick overview of your business.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-xl ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <h4 className="text-2xl font-bold">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Recent Properties</h3>
          <div className="space-y-4">
            {properties?.slice(0, 5).map(property => (
              <div key={property.id} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg"></div>
                  <div>
                    <p className="font-bold">{property.title}</p>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-900">{property.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Recent Inquiries</h3>
          <p className="text-gray-400 text-center py-12">Inquiry tracking coming in Sprint 2.</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
