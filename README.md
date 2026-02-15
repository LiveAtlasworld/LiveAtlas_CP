LiveAtlas - Real-time Virtual Tour Platform 🌍

LiveAtlas is a full-stack WebRTC application designed to connect local tour guides with global travelers through live, interactive broadcasts.

🚀 Key Features

Dual Dashboards: Separate interfaces for Guides (to create/manage tours) and Tourists (to browse/join).

Live WebRTC Video: Real-time, low-latency video streaming with peer-to-peer signaling.

Signal Controls: In-room features including Mute, Video Toggle, Fullscreen (Focus Mode), and End Call.

Dynamic Discovery: A tourist dashboard that updates in real-time as guides go live or end sessions.

Image Uploads: Guides can upload high-quality tour thumbnails to attract viewers.

Sky-Blue Theme: A modern, travel-motivated UI with a clean "LiveAtlas" branding.

🛠️ Technology Stack

Frontend: React.js, Vite, React Router, React Icons.

Backend: Django, Django Channels (ASGI), Daphne.

Communication: WebRTC (Signaling via WebSockets).

Database: SQLite (Development) / PostgreSQL (Production).

💻 Local Setup Instructions

1. Clone the Repository

git clone [https://github.com/mekalasindhuja70/LiveAtlas.git](https://github.com/mekalasindhuja70/LiveAtlas.git)
cd liveatlas


2. Backend Setup

cd backend
python -m venv venv

# Windows:
.\venv\Scripts\activate
# Mac/Linux:
# source venv/bin/activate

# Install Dependencies:
pip install django daphne channels pillow

# Setup Database:
python manage.py makemigrations
python manage.py migrate

# Start Server:
python manage.py runserver


3. Frontend Setup

cd ../frontend
npm install

# Start Frontend:
npm run dev


✅ Final Project Checklist

Guide Flow: Login as Guide -> Create Tour with Image -> Click "Start Broadcast" -> Redirects to Room.

User Flow: Login as Tourist -> Browse "Active Broadcasts" -> Click "Join Broadcast" -> Enter Room.

WebRTC: Ensure you are running on localhost or HTTPS for camera permissions to work.
