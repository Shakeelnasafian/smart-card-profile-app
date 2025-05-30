# 🌐 Smart Card Profile System

A modern full-stack application to create, manage, and share digital business cards and portfolios using QR codes and smart profiles.

## 🔧 Tech Stack

- **Frontend**: React (Vite) + Tailwind CSS + TypeScript
- **Backend**: FastAPI + SQLAlchemy + PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **QR Code**: Python `qrcode` library
- **Deployment-ready**: Docker support for both frontend and backend

---

## 🚀 Features

- 🧑‍💼 Create an online profile with contact details
- 🖼️ Design a digital business card with layout and theme options
- 📦 Showcase projects or portfolio items
- 🔗 Generate QR codes linking to your profile or external links
- 📱 Scan QR to view a mobile-optimized digital card
- 🎨 Choose from multiple layouts and color themes
- 🛠 Basic admin dashboard to manage profiles and QR settings

---

## 📁 Folder Structure

smart-card-profile-app/
│
├── backend/ # FastAPI backend
│ ├── app/ # API, models, services
│ └── requirements.txt
│
├── frontend/ # React frontend (Vite + TypeScript)
│ ├── src/
│ └── tailwind.config.js
│
├── docker-compose.yml 
└── README.md


---

## 🛠 Setup Instructions

### 📦 Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate      
pip install -r requirements.txt
uvicorn app.main:app --reload


cd frontend
npm install
npm run dev


DATABASE_URL=postgresql://user:password@localhost:5432/smartcarddb
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30


VITE_API_BASE_URL=http://localhost:8000
