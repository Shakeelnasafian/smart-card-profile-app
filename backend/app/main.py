from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1 import dashboard, profile, project, viewer, auth

app = FastAPI(
        title="Smart Card Profile API",
        version="1.0.0"
    )

# Allow frontend dev environment to access API
# origins = [
#     "http://localhost:3000",
#     "http://127.0.0.1:3000",
# ]

origins = ["*"]

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(dashboard.router)
app.include_router(profile.router)
app.include_router(project.router)
app.include_router(viewer.router)


@app.get("/")
def read_root():
    return {"message": "Welcome to the Smart Card Profile API!"}