import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { propertyService } from '../services/api';

export const useProperties = (params) => {
  return useQuery({
    queryKey: ['properties', params],
    queryFn: () => propertyService.getAll(params).then(res => res.data),
  });
};

export const useFeaturedProperties = () => {
  return useQuery({
    queryKey: ['properties', 'featured'],
    queryFn: () => propertyService.getFeatured().then(res => res.data),
  });
};

export const useProperty = (id) => {
  return useQuery({
    queryKey: ['properties', id],
    queryFn: () => propertyService.getById(id).then(res => res.data),
    enabled: !!id,
  });
};

export const useCreateProperty = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => propertyService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    },
  });
};
