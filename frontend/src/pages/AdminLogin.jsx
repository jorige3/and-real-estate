import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authService } from '../services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Loader2, Lock } from 'lucide-react';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await authService.login(data.username, data.password);
      localStorage.setItem('token', response.data.access_token);
      toast.success('Welcome back, Admin!');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-slate-900 text-white rounded-xl mb-4">
            <Lock size={24} />
          </div>
          <h2 className="text-3xl font-bold">Admin Login</h2>
          <p className="text-gray-500 mt-2">Access the control panel</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Username</label>
            <input 
              {...register('username')}
              type="text" 
              className={`w-full border ${errors.username ? 'border-red-500' : 'border-slate-200'} px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-slate-900`}
            />
            {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold">Password</label>
            <input 
              {...register('password')}
              type="password" 
              className={`w-full border ${errors.password ? 'border-red-500' : 'border-slate-200'} px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-slate-900`}
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-70"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
