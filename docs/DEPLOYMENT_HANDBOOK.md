# Legislate Project Deployment Wiki

This document serves as a comprehensive guide for deploying and maintaining the **Legislate** project (specifically the `nh-civic-app`). Use this reference when context switching or returning to the project after a break.

## 1. Project Structure Context

Crucial for understanding where to run commands.

- **Root Directory (`/Legislate`)**: The workspace root. Contains project-wide config (like `.agent` workflows) but is **NOT** the Next.js application root.
- **App Directory (`/Legislate/nh-civic-app`)**: The actual Next.js application. **All build, dev, and deployment commands must be run from here.**

> **⚠️ ongoing confusion risk:** Running `npm run dev` or `vercel` from the *Root Directory* will often fail or deploy the wrong thing. Always `cd nh-civic-app` first.

## 2. Development Workflow (Local)

Before deploying, ensure your local environment is working.

```powershell
# 1. Navigate to the app directory
cd nh-civic-app

# 2. Start the development server
npm run dev
# Runs on: http://localhost:3001
```

## 3. Deployment Workflow (Vercel)

We use Vercel for production hosting. The CLI is the preferred method.

### Standard Production Deploy

The "Golden Path" for deployment.

1. **Navigate to App Dir:**

    ```powershell
    cd nh-civic-app
    ```

2. **Run Deploy Command:**

    ```powershell
    npx vercel --prod
    ```

    - This triggers a remote build on Vercel's servers.
    - It updates the production alias automatically.

### Testing a Build Locally (Optional but Recommended)

If you made complex config changes, test the build locally before shipping.

```powershell
npm run vercel-build
# Then start the built version:
npm start
```

## 4. Git Synchronization Workflow

Keep your local repository in sync to avoid "diverged branch" errors.

### The "Safe Sync" Routine

Perform this before starting major work or before deploying.

```powershell
# 1. Stash any work-in-progress if not ready to commit
git stash

# 2. Pull latest changes (rebase to keep history clean)
git pull --rebase

# 3. Apply stashed changes (if any)
git stash pop
```

### The "Ship It" Routine

Perform this when you are ready to save your work.

```powershell
# 1. Stage changes
git add .

# 2. Commit
git commit -m "feat: description of changes"

# 3. Push to remote
git push
```

## 5. Troubleshooting Common Issues

### "Branch is ahead/behind"

If `git status` says your branch is diverged:

1. **Don't panic.**
2. Run `git pull --rebase`.
3. If conflicts arise, VS Code will highlight them. Fix them, then `git rebase --continue`.
4. Finally, `git push`.

### Vercel Build Fails

If `npx vercel --prod` fails:

1. Check the error log URL provided in the terminal.
2. Run `npm run lint` locally to catch type errors or formatting issues.
3. Run `npm run vercel-build` locally to see if it's a build configuration error.

## 6. Important Resources

- **Production URL:** [https://nh-civic-app.vercel.app](https://nh-civic-app.vercel.app)
- **Repository:** [https://github.com/us-civic-action/us-civic-app](https://github.com/us-civic-action/us-civic-app)
- **Vercel Dashboard:** [https://vercel.com/dashboard](https://vercel.com/dashboard)
