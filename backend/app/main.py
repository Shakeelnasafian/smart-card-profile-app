import uvicorn
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

db = [
    {
        "size": "s",
        "fuel": "gasoline",
        "doors": 3,
        "transmission": "auto",
        "trips": [
            {
                "start": 0,
                "end": 5,
                "description": "Groceries",
                "id": 1
            },
            {
                "start": 5,
                "end": 218,
                "description": "Commute Amsterdam-Rotterdam",
                "id": 2
            },
            {
                "start": 218,
                "end": 257,
                "description": "Weekend beach trip",
                "id": 3
            }
        ],
        "id": 1
    },
    {
        "size": "s",
        "fuel": "electric",
        "doors": 3,
        "transmission": "auto",
        "trips": [
            {
                "start": 0,
                "end": 34,
                "description": "Taking dog to the vet",
                "id": 4
            },
            {
                "start": 34,
                "end": 125,
                "description": "Meeting Customer in Utrecht",
                "id": 5
            }
        ],
        "id": 2
    },
    {
        "size": "s",
        "fuel": "gasoline",
        "doors": 5,
        "transmission": "manual",
        "trips": [],
        "id": 3
    },
    {
        "size": "m",
        "fuel": "electric",
        "doors": 3,
        "transmission": "auto",
        "trips": [
            {
                "start": 0,
                "end": 100,
                "description": "Visiting mom",
                "id": 6
            }
        ],
        "id": 4
    },
    {
        "size": "m",
        "fuel": "gasoline",
        "doors": 5,
        "transmission": "manual",
        "trips": [],
        "id": 6
    },
    {
        "size": "l",
        "fuel": "diesel",
        "doors": 5,
        "transmission": "manual",
        "trips": [],
        "id": 7
    },
    {
        "size": "l",
        "fuel": "electric",
        "doors": 5,
        "transmission": "auto",
        "trips": [],
        "id": 8
    },
    {
        "size": "l",
        "fuel": "hybrid",
        "doors": 5,
        "transmission": "auto",
        "trips": [
            {
                "start": 0,
                "end": 55,
                "description": "Forest walk",
                "id": 7
            }
        ],
        "id": 9
    },
    {
        "size": "xl",
        "fuel": "electric",
        "doors": 5,
        "transmission": "auto",
        "trips": [],
        "id": 10
    }
]

@app.get("/")
def read_root():
    return {"message": f"Welcome to the Smart Card Profile API!"}

@app.get("/cars")
def get_car(size: str = None, doors:int = None, fuel: str = None, transmission: str = None) -> list:
    results = db
    if size:
        return [car for car in db if car['size'] == size ]
    elif doors:
        return [car for car in db if car['doors'] == doors ]
    elif fuel:
        return [car for car in db if car['fuel'] == fuel ]
    elif transmission:
        return [car for car in db if car['transmission'] == transmission ]
    else:
        return results

@app.get("/cars/{car_id}") 
def get_car_by_id(car_id: int) ->dict:
    results = [car for car in db if car['id'] == car_id]
    return results[0] if results else None


if __name__ == "__main__":
    uvicorn.run(app, host="app.main:app", reload=True, port=8000)