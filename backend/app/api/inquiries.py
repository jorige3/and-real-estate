from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from backend.app.database.session import get_db
from backend.app.services.inquiry import InquiryService, InquiryCreate

router = APIRouter(prefix="/inquiries", tags=["inquiries"])

@router.post("/")
async def create_inquiry(inquiry_in: InquiryCreate, db: AsyncSession = Depends(get_db)):
    return await InquiryService.create(db, inquiry_in)
