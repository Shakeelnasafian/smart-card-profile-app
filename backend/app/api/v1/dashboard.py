from fastapi import APIRouter

router = APIRouter(prefix="/dashboard", tags=["dashboard"])
@router.get("/")

def get_dashboard():
     return {
        "name": "Shakeel Ahmad",
        "title": "Full Stack Developer",
        "email": "shakeel@example.com",
        "summary": "Welcome to your dashboard!",
        "actions": ["Edit Profile", "View QR", "Add Project"]
    }