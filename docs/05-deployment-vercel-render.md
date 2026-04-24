
# Deploy frontend to Vercel and backend to Render

Vercel's full-stack FastAPI guidance recommends deploying frontend and backend as **two separate projects** and wiring them together using environment variables like `API_URL` and `SITE_URL`.



## Deploy FastAPI backend on Render

### Render settings
- **Runtime:** Python 3
- **Build Command:**
```powershell
pip install -r requirements.txt
```
- **Start Command:**
```powershell
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

### Add environment variables on Render
- `APP_NAME=Bhagyashri Portfolio API`
- `APP_VERSION=1.0.0`
- `FRONTEND_URL=https://your-frontend-domain.vercel.app`

### Optional `render.yaml`
```yaml
services:
  - type: web
    name: bhagyashri-portfolio-api
    env: python
    plan: free
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

## Deploy Next.js frontend on Vercel

### Vercel steps
1. Push the `frontend` folder code to GitHub.
2. Import the project in Vercel.
3. Framework preset should auto-detect as **Next.js**.
4. Add environment variable:
```env
NEXT_PUBLIC_API_BASE_URL=https://your-render-backend.onrender.com
```
5. Deploy.

## After deployment
Update backend `.env` or Render env variable:
```env
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

This allows CORS to work correctly between the deployed frontend and backend.
