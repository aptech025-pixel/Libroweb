# SmartSpeak

SmartSpeak is a modern, mobile-first web app for learning Nigerian languages. It features interactive lessons, real-time TTS, analytics, social sharing, and a secure authentication system. Built with HTML, Tailwind CSS, JavaScript, Three.js, and a Node.js/Express/MongoDB backend.

## Features
- Single Page Application (SPA) with client-side routing
- Animated Three.js particle background
- Custom preloader with SVG logo and loading bar
- Local data management (profile/settings)
- Text-to-Speech (TTS) for Nigerian languages
- Toast notification system
- Cookie consent modal for authentication
- Secure JWT authentication and API key generation
- Mobile app standards: gestures, bottom sheets, adaptive layouts
- Advanced backend: lesson recommendations, analytics, notifications, achievements, social sharing

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/aptech025-pixel/Libroweb.git
   cd Libroweb
   ```
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start MongoDB and backend server:
   ```bash
   npm start
   ```
4. Open `index.html` in your browser or use a local server for frontend.

### Environment Variables
Create a `.env` file in `backend/` with:
```
MONGO_URI=mongodb://localhost:27017/smartspeak
JWT_SECRET=your_jwt_secret
```

## Usage
- Register or login to access profile features
- Generate API key for Google TTS integration
- Explore lessons, use TTS, and track progress
- Share achievements and progress on social media

## Technologies
- Frontend: HTML, Tailwind CSS, JavaScript, Three.js
- Backend: Node.js, Express, MongoDB, JWT
- TTS: Google Cloud API (integration ready)

## License
MIT

## Contributing
Pull requests welcome! For major changes, open an issue first.

## Author
aptech025-pixel
