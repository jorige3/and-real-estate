import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_URL,
});

// Add interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const propertyService = {
  getAll: (params) => api.get('/properties/', { params }),
  getFeatured: () => api.get('/properties/featured'),
  getById: (id) => api.get(`/properties/${id}`),
  create: (data) => api.post('/properties/', data),
  update: (id, data) => api.put(`/properties/${id}`, data),
  delete: (id) => api.delete(`/properties/${id}`),
  uploadImage: (id, formData) => api.post(`/properties/${id}/images`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const authService = {
  login: (username, password) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return api.post('/auth/login', formData);
  },
  getMe: () => api.get('/auth/me'),
};

export const inquiryService = {
  create: (data) => api.post('/inquiries/', data),
};

export default api;
