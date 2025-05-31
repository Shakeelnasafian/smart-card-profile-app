from fastapi import APIRouter

router = APIRouter(prefix="/projects", tags=["projects"])
@router.get("/")

def get_projects():
    return [
        {
            "title": "Portfolio Website",
            "description": "Personal portfolio using React & Tailwind",
            "url": "https://shakeel.dev"
        },
        {
            "title": "QR Profile Card",
            "description": "Smart card with QR & profile display",
            "url": "#"
        }
    ]