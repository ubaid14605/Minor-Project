# Copilot Instructions for AI Coding Agents
## Project Architecture & Structure
- **Frontend:** Single-page React app using Vite, located in `Frontend/`.
	- Main entry: `src/main.jsx` renders `App.jsx`.
	- UI is composed from modular components in `src/components/`, each with a co-located CSS module (e.g., `Slider.jsx` & `Slider.module.css`).
	- No backend or API integration; all data is local or static.
- **Data:** `LoanBuddy_DB.json` at the repo root contains mock bank/loan data, but is not imported or used by the app by default.
- **Subprojects:** `Frontend/Project-Minor/` is present but not referenced in the main app.
## Developer Workflows
- **Start Dev Server:**
	- `cd Frontend && npm run dev` (runs Vite, hot reloads on changes)
- **Build for Production:**
	- `npm run build` (outputs to `Frontend/dist/`)
- **Preview Production Build:**
	- `npm run preview`
- **Linting:**
	- `npm run lint` (uses ESLint, config in `eslint.config.js`)
- **No Tests:**
	- No test framework or scripts are present; testing is manual/visual only.
## Project-Specific Conventions & Patterns
- **Component Pattern:**
	- Each feature = one component in `src/components/` with a matching CSS module for styles.
	- Example: `Calculator.jsx` uses `Calculator.module.css`.
- **Imports:**
	- Use relative imports for all components/assets within `src/`.
- **Styling:**
	- All styles are via CSS modules, not global CSS.
- **State Management:**
	- All state is local to components; no Redux, Context API, or global state.
- **No TypeScript:**
	- All code is plain JavaScript (JSX).
- **No Routing:**
	- Navigation is via anchor tags; no React Router or SPA routing logic.
- **No Backend:**
	- No API calls, server code, or persistent storage.
## Integration & External Dependencies
- **React** (v19+), **Vite**, **Bootstrap** (for some UI), **Chart.js** (for future/optional charting), **react-icons**.
- No custom or third-party API integration.
## Key Files & Directories
- `Frontend/src/App.jsx` – Main UI composition
- `Frontend/src/components/` – All feature components and their styles
- `Frontend/package.json` – Scripts, dependencies
- `Frontend/eslint.config.js` – Linting config
- `LoanBuddy_DB.json` – Local/mock data (not used in code)
## Examples
- To add a new feature: create `src/components/MyFeature.jsx` and `MyFeature.module.css`, then import and use in `App.jsx`.
- To update the UI: edit `App.jsx` to change component composition/order.
---
For more, see `Frontend/README.md`.
