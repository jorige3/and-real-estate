from sqlalchemy.ext.asyncio import AsyncSession
from backend.app.models.inquiry import Inquiry
from pydantic import BaseModel
from typing import Optional

class InquiryCreate(BaseModel):
    name: str
    phone: str
    subject: str
    message: str
    property_id: Optional[int] = None

class InquiryService:
    @staticmethod
    async def create(db: AsyncSession, inquiry_in: InquiryCreate) -> Inquiry:
        db_inquiry = Inquiry(**inquiry_in.model_dump())
        db.add(db_inquiry)
        await db.commit()
        await db.refresh(db_inquiry)
        return db_inquiry
