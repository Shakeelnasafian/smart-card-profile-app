from fastapi import APIRouter

router = APIRouter(prefix="/profile", tags=["profile"])
@router.get("/")

def get_profile():
    return {
        "name": "Shakeel Ahmad",
        "title": "Full Stack Developer",
        "bio": "I build modern web apps using Laravel, React, and Python.",
        "email": "shakeel@nasafian.com",
        "phone": "+971 50 123 4567",
        "website": "https://shakeel.dev",
        "linkedin": "https://linkedin.com/in/shakeel"
    }