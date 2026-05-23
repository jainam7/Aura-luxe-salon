# GitHub Setup Guide

Your project is now initialized with Git! Follow these steps to push your code to GitHub:

## Step 1: Create a Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the **+** icon in the top-right corner
3. Select **New repository**
4. Name your repository (e.g., `luxe-canadian-unisex-salon-template`)
5. Add a description (optional)
6. Choose **Public** or **Private**
7. **Do NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **Create repository**

## Step 2: Update Git Configuration (Optional but Recommended)

Replace the placeholder credentials with your actual GitHub account information:

```bash
git config user.name "Your Full Name"
git config user.email "your.email@example.com"
```

To verify your configuration:
```bash
git config user.name
git config user.email
```

## Step 3: Add GitHub Remote

After creating the repository on GitHub, you'll see instructions. Run this command with your GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/luxe-canadian-unisex-salon-template.git
```

Or if you prefer SSH (requires SSH key setup):
```bash
git remote add origin git@github.com:YOUR_USERNAME/luxe-canadian-unisex-salon-template.git
```

Verify the remote was added:
```bash
git remote -v
```

## Step 4: Rename Default Branch (if needed)

GitHub uses `main` as default, which we already have:
```bash
git branch -m master main  # Only run if your current branch is "master"
```

## Step 5: Push Your Code to GitHub

```bash
git push -u origin main
```

The `-u` flag sets the upstream tracking, so future pushes only need `git push`.

## Future Commits

After making changes, use these commands:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push
```

## Useful Git Commands

- **Check status**: `git status`
- **View commit history**: `git log --oneline`
- **Create a new branch**: `git checkout -b feature-name`
- **Switch branches**: `git checkout branch-name`
- **View all branches**: `git branch -a`

## Troubleshooting

**Authentication Failed?**
- For HTTPS: Create a [Personal Access Token](https://github.com/settings/tokens) and use it as your password
- For SSH: Make sure your SSH key is added to GitHub

**Want to change the remote URL?**
```bash
git remote set-url origin NEW_URL
```

## .gitignore Configuration

Your project already includes a comprehensive `.gitignore` that ignores:
- `node_modules/` - Dependencies
- `build/` and `dist/` - Build outputs
- `coverage/` - Test coverage reports
- `.DS_Store` - macOS system files
- `*.log` - Log files
- `.env*` - Environment variables (keeps `.env.example`)
