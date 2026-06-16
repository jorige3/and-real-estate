from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import update, delete
from backend.app.models.property import Property, PropertyImage
from backend.app.schemas.property import PropertyCreate, PropertyUpdate
from typing import List, Optional

from sqlalchemy.orm import selectinload

class PropertyService:
    @staticmethod
    async def get_all(db: AsyncSession, skip: int = 0, limit: int = 100) -> List[Property]:
        result = await db.execute(
            select(Property)
            .options(selectinload(Property.images))
            .offset(skip)
            .limit(limit)
        )
        return result.scalars().all()

    @staticmethod
    async def get_by_id(db: AsyncSession, property_id: int) -> Optional[Property]:
        result = await db.execute(
            select(Property)
            .options(selectinload(Property.images))
            .where(Property.id == property_id)
        )
        return result.scalars().first()

    @staticmethod
    async def get_featured(db: AsyncSession) -> List[Property]:
        result = await db.execute(
            select(Property)
            .options(selectinload(Property.images))
            .where(Property.featured == True)
        )
        return result.scalars().all()

    @staticmethod
    async def create(db: AsyncSession, property_in: PropertyCreate) -> Property:
        db_property = Property(**property_in.model_dump())
        db.add(db_property)
        await db.commit()
        return await PropertyService.get_by_id(db, db_property.id)

    @staticmethod
    async def update(db: AsyncSession, property_id: int, property_in: PropertyUpdate) -> Optional[Property]:
        await db.execute(
            update(Property)
            .where(Property.id == property_id)
            .values(**property_in.model_dump(exclude_unset=True))
        )
        await db.commit()
        return await PropertyService.get_by_id(db, property_id)

    @staticmethod
    async def delete(db: AsyncSession, property_id: int) -> bool:
        await db.execute(delete(Property).where(Property.id == property_id))
        await db.commit()
        return True

    @staticmethod
    async def add_image(db: AsyncSession, property_id: int, image_url: str, is_main: bool = False) -> PropertyImage:
        db_image = PropertyImage(property_id=property_id, image_url=image_url, is_main=is_main)
        db.add(db_image)
        await db.commit()
        await db.refresh(db_image)
        return db_image

    @staticmethod
    async def delete_image(db: AsyncSession, image_id: int) -> bool:
        await db.execute(delete(PropertyImage).where(PropertyImage.id == image_id))
        await db.commit()
        return True
