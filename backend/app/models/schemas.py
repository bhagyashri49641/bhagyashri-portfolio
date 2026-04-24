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