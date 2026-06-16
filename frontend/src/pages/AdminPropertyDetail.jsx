import AdminLayout from '../components/AdminLayout';
import PropertyForm from '../components/PropertyForm';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useProperty } from '../hooks/useProperties';
import { Loader2 } from 'lucide-react';

const AdminPropertyDetail = ({ mode = 'new' }) => {
  const { id } = useParams();
  const { data: property, isLoading } = useProperty(id);

  return (
    <AdminLayout>
      <div className="mb-8">
        <Link to="/admin/properties" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-4">
          <ArrowLeft size={18} />
          Back to list
        </Link>
        <h2 className="text-3xl font-bold">
          {mode === 'new' ? 'Add New Property' : 'Edit Property'}
        </h2>
      </div>

      {mode === 'edit' && isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-slate-900" size={48} />
        </div>
      ) : (
        <PropertyForm 
          isEdit={mode === 'edit'} 
          initialData={property} 
        />
      )}
    </AdminLayout>
  );
};

export default AdminPropertyDetail;
