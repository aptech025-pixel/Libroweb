# Vercel Deployment Instructions for SmartSpeak SPA

This project is configured for static SPA hosting on Vercel. The backend (Express/MongoDB) is NOT deployed on Vercel; only the frontend is served.

## How it works
- All routes are rewritten to `index.html` for SPA navigation.
- Backend API calls must point to your backend server (e.g., localhost or a remote server).
- No serverless functions or Node.js backend will run on Vercel.

## Steps to deploy
1. Commit all changes to your repo.
2. Push to GitHub (if using Vercel Git integration).
3. Run `vercel --prod` in the project root.
4. Visit your Vercel dashboard to confirm deployment.

## Troubleshooting
- If you see raw code or template literals, check that `vercel.json` exists and is correct.
- If backend features do not work, ensure your backend is running elsewhere and update API URLs in `index.html`.
- For fullstack deployment, use Vercel for frontend and another service (e.g., Render, Railway, Heroku) for backend.

## Files included
- index.html
- assets/
- scripts/
- styles/
- manifest.json
- vercel.json
- .vercelignore

## Contact
For backend deployment help, ask for Render/Railway/Heroku setup.
