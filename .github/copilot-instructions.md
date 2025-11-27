## Purpose
Provide concise, project-specific guidance for AI coding agents working on this repo (Express + Next.js portfolio).

## Big Picture
- **Backend:** Node/Express app in `backend/` (ESM - `type: module`), MongoDB via `mongoose`. Routes live in `backend/route/`, schemas in `backend/schema/`, file uploads use `multer` + Cloudinary.
- **Frontend:** Next.js app in `frontend/` (Next 15, turbopack). Source under `frontend/src/` using the new App Router structure. State stores use `zustand` in `frontend/src/Store`.
- **Deployments:** Frontend configured for Netlify (`frontend/netlify.toml`) and Vercel-compatible Next config (`next.config.ts`), images served from Cloudinary (`res.cloudinary.com`).

## How to run locally
- Backend: `cd backend` -> `npm install` -> set `.env` and run `npm start` (script runs `node index.js`).
  - Required env vars (examples): `MONGO_URI`, `RUNNING_PORT`, `SECRET_KEY`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SEC_KEY`.
- Frontend: `cd frontend` -> `npm install` -> `npm run dev` (opens at `http://localhost:3000`).

## Important project-specific patterns & conventions
- Backend is ESM: use `import`/`export` consistently and do not switch to CommonJS.
- Route structure: each resource has a route file under `backend/route/` and a corresponding Mongoose schema in `backend/schema/` (e.g., `blogRoute.js` ⟺ `blogSchema.js`).
- File upload flow (common pattern): route uses `upload.single('image')` (see `backend/route/blogRoute.js` and `projectRoute.js`); uploaded file is saved locally by `multer` (`backend/multer/uploads`) then uploaded to Cloudinary via `cloudinary.uploader.upload(req.file.path)`, and the returned `result.secure_url` is stored in the DB.
- Auth: simple cookie-based JWT flow in `backend/route/authRoute.js` — after signup a JWT is created with `jwt.sign` and set on `res.cookie('token', token)`. The secret is `process.env.SECRET_KEY`.
- CORS: configured in `backend/index.js` with a fixed allowlist (`http://localhost:3000` and production URLs). If debugging locally from other origins, update this file or the env.
- DB connection: `backend/db/db.js` reads `process.env.MONGO_URI` and calls `mongoose.connect`.

## Files to inspect for context and examples
- Backend entry: `backend/index.js` (starts server, registers routes)
- Routes: `backend/route/*.js` (examples: `blogRoute.js`, `projectRoute.js`, `authRoute.js`)
- Schemas: `backend/schema/*.js` (e.g., `authSchema.js`)
- Uploads & Cloudinary: `backend/multer/multer.js`, `backend/cloudnary/cloudnary.js`
- Frontend Next app: `frontend/src/app/*`, components: `frontend/src/components/*`
- State stores: `frontend/src/Store/*` (e.g., `UserZust.jsx`)
- Frontend config: `frontend/next.config.ts`, `frontend/netlify.toml`

## Editing and PR guidance for agents
- When adding a backend endpoint: add route under `backend/route/`, corresponding schema under `backend/schema/` if persistent, and register the route in `backend/index.js`.
- When working with uploads: follow the existing `multer` -> `cloudinary` flow. Do not remove `multer` disk storage unless you also adjust all upload calls.
- Keep environment variables in `.env` (do not commit `.env`). Use `dotenv` in backend — `backend/index.js` already calls `dotenv.config()`.
- Keep package `type: module` in `backend/package.json` — changing it will break imports.

## Common pitfalls to avoid
- Modifying import style (CommonJS ↔ ESM) in backend files.
- Assuming Next pages router — this repo uses the App Router under `frontend/src/app/`.
- Editing `next.config.ts` without testing image domain changes; Cloudinary domain is required for remote images.

## Quick examples (copyable)
- Upload + Cloudinary pattern (see `backend/route/blogRoute.js`):
  - `router.post('/', upload.single('image'), async (req, res) => { const result = await cloudinary.uploader.upload(req.file.path, { folder: 'blog' }); /* save result.secure_url */ })`
- Auth cookie: `const token = jwt.sign({id:user._id}, process.env.SECRET_KEY); res.cookie('token', token)` (see `backend/route/authRoute.js`).

## If you need more
- Ask for specific clarifications: preferred linting/formatting, adding unit tests, or how to extend an API route. Provide file paths and a short goal and the agent will implement a minimal, consistent change.

---
Please review these instructions and tell me any missing areas or conventions you want included (CI, linters, commit rules, or deploy steps).
