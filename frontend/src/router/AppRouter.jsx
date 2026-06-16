import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Properties from '../pages/Properties';
import Contact from '../pages/Contact';
import PropertyDetails from '../pages/PropertyDetails';
import Services from '../pages/Services';
import AdminLogin from '../pages/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';
import AdminPropertyList from '../pages/AdminPropertyList';
import AdminPropertyDetail from '../pages/AdminPropertyDetail';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/properties" element={<AdminPropertyList />} />
      <Route path="/admin/properties/new" element={<AdminPropertyDetail mode="new" />} />
      <Route path="/admin/properties/edit/:id" element={<AdminPropertyDetail mode="edit" />} />
    </Routes>
  );
};

export default AppRouter;
