import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Loader2 } from 'lucide-react';

const ImageUpload = ({ images, setImages }) => {
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    // In a real app, we would upload to Cloudinary immediately here
    // or when the form is submitted. For Sprint 1, we show previews.
    const newImages = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9)
    }));
    setImages(prev => [...prev, ...newImages]);
  }, [setImages]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true
  });

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors cursor-pointer
          ${isDragActive ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-400'}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto mb-4 text-slate-400" size={32} />
        {isDragActive ? (
          <p className="text-slate-900 font-medium">Drop the files here...</p>
        ) : (
          <p className="text-gray-500">Drag & drop property images, or click to select</p>
        )}
        <p className="text-xs text-gray-400 mt-2">Maximum 5 images, up to 5MB each</p>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-5 gap-4">
          {images.map((img) => (
            <div key={img.id} className="relative aspect-square group">
              <img 
                src={img.preview || img.image_url} 
                alt="Preview" 
                className="w-full h-full object-cover rounded-xl border border-slate-100" 
              />
              <button 
                type="button"
                onClick={() => removeImage(img.id)}
                className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
