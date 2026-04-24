
# Step-by-step setup on Windows

## 1) Create the project root
```powershell
mkdir portfolio-starter-kit
cd portfolio-starter-kit
mkdir frontend, backend, docs
```

## 2) Create Next.js frontend
```powershell
npx create-next-app@latest frontend --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
```

When prompted:
- Use TypeScript? **Yes**
- Use ESLint? **Yes**
- Use Tailwind CSS? **Yes**
- Use `src/` directory? **Yes**
- Use App Router? **Yes**
- Use Turbopack for `next dev`? **Yes**
- Customize import alias? **No** (or keep `@/*`)

## 3) Create FastAPI backend with Python 3.12
```powershell
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install fastapi uvicorn[standard] pydantic-settings python-dotenv
pip freeze > requirements.txt
cd ..
```

## 4) Run frontend locally
```powershell
cd frontend
npm install
npm run dev
```

## 5) Run backend locally
```powershell
cd backend
.\.venv\Scripts\Activate.ps1
uvicorn app.main:app --reload
```

## 6) Connect frontend to backend
In the frontend `.env.local` file:
```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

## 7) Common Windows notes
- If PowerShell blocks activation, run:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
- If `py -3.12` does not work, confirm Python 3.12 is installed:
```powershell
py -0p
```
