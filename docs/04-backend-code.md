
# Backend code

## 1) Create folders
```powershell
mkdir app
mkdir app\api
mkdir app\api\routes
mkdir app\core
mkdir app\models

ni app\main.py -ItemType File
ni app\core\config.py -ItemType File
ni app\models\schemas.py -ItemType File
ni app\api\routes\portfolio.py -ItemType File
```

## 2) `requirements.txt`
```txt
fastapi==0.115.12
uvicorn[standard]==0.34.0
pydantic-settings==2.8.1
python-dotenv==1.0.1
```

## 3) `.env`
```env
APP_NAME=Bhagyashri Portfolio API
APP_VERSION=1.0.0
FRONTEND_URL=http://localhost:3000
```

## 4) `app/core/config.py`
```py
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Bhagyashri Portfolio API"
    app_version: str = "1.0.0"
    frontend_url: str = "http://localhost:3000"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


settings = Settings()
```

## 5) `app/models/schemas.py`
```py
from pydantic import BaseModel
from typing import List


class Project(BaseModel):
    title: str
    description: str
    stack: List[str]
    link: str


class PortfolioResponse(BaseModel):
    name: str
    role: str
    about: str
    skills: List[str]
    projects: List[Project]
```

## 6) `app/api/routes/portfolio.py`
```py
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
```

## 7) `app/main.py`
```py
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
```

## 8) Run backend
```powershell
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```
