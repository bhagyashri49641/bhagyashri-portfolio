from fastapi import APIRouter
from app.models.schemas import PortfolioResponse, Project

router = APIRouter(prefix="/api/v1", tags=["portfolio"])


@router.get("/health")
def health_check():
    return {"status": "ok", "message": "Portfolio API is running"}


@router.get("/portfolio", response_model=PortfolioResponse)
def get_portfolio():
    return PortfolioResponse(
        name="Bhagyashri",
        role="Aspiring Data Engineer • Data Analyst • Full-Stack Developer",
        about="Tech-focused professional building modern data and web projects.",
        skills=["Python", "SQL", "FastAPI", "Next.js", "React", "Tailwind CSS"],
        projects=[
            Project(
                title="Portfolio Platform",
                description="Modern portfolio frontend and backend starter.",
                stack=["Next.js", "FastAPI", "Render", "Vercel"],
                link="#",
            )
        ],
    )