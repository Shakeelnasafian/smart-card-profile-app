from fastapi import APIRouter

router = APIRouter(prefix="/profile", tags=["profile"])
@router.get("/")

def get_public_profile(username: str):
    return {
        "username": username,
        "name": "Shakeel Ahmad",
        "title": "Full Stack Developer",
        "bio": "This is a public viewer of the smart card profile.",
        "projects": [
            {"title": "Public Project 1", "url": "#"},
            {"title": "Public Project 2", "url": "#"},
        ]
    }