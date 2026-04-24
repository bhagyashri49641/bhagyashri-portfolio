from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.portfolio import router as portfolio_router
from app.core.config import settings


app = FastAPI(title=settings.app_name, version=settings.app_version)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(portfolio_router)


@app.get("/")
def root():
    return {"message": settings.app_name, "version": settings.app_version}