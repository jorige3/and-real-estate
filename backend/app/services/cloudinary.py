import cloudinary
import cloudinary.uploader
from backend.app.core.config import settings

cloudinary.config(
    cloud_name=settings.CLOUDINARY_CLOUD_NAME,
    api_key=settings.CLOUDINARY_API_KEY,
    api_secret=settings.CLOUDINARY_API_SECRET,
    secure=True
)

class CloudinaryService:
    @staticmethod
    def upload_image(file_content, folder="properties"):
        try:
            upload_result = cloudinary.uploader.upload(
                file_content,
                folder=folder,
                resource_type="image"
            )
            return {
                "url": upload_result.get("secure_url"),
                "public_id": upload_result.get("public_id")
            }
        except Exception as e:
            print(f"Cloudinary upload error: {e}")
            return None

    @staticmethod
    def delete_image(public_id):
        try:
            cloudinary.uploader.destroy(public_id)
            return True
        except Exception as e:
            print(f"Cloudinary delete error: {e}")
            return False
