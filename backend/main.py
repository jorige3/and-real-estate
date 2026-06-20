from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.app.core.config import settings
from backend.app.api.auth import router as auth_router
from backend.app.api.inquiries import router as inquiry_router
from backend.app.api.properties import router as property_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0",
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes
app.include_router(property_router, prefix="/api/v1", tags=["Properties"])
app.include_router(auth_router, prefix="/api/v1", tags=["Authentication"])
app.include_router(inquiry_router, prefix="/api/v1", tags=["Inquiries"])


@app.get("/", tags=["Health"])
async def root():
    return {
        "status": "ok",
        "message": f"Welcome to {settings.PROJECT_NAME} API",
    }


@app.get("/health", tags=["Health"])
async def health_check():
    return {"status": "healthy"}



