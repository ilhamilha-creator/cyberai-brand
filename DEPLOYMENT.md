# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CyberAI personal brand website"
   git branch -M main
   git remote add origin https://github.com/yourusername/cyberai-brand.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Add environment variable: `ANTHROPIC_API_KEY`
   - Click "Deploy"

3. **Your site will be live at**: `https://your-project.vercel.app`

## Alternative Deployment Options

### Netlify
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build the project: `npm run build`
3. Deploy: `netlify deploy --prod`

### GitHub Pages
1. Update `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```
2. Build: `npm run build`
3. Deploy `out` folder to GitHub Pages

## Environment Variables

For any deployment, make sure to add:
- `ANTHROPIC_API_KEY`: Your Anthropic API key

## Before Submission Checklist

- [ ] Website loads without errors
- [ ] All links work correctly
- [ ] AI agent page functions (with valid API key)
- [ ] Responsive design works on mobile
- [ ] Contact information is accurate
- [ ] Project brief is complete
- [ ] README is comprehensive

## Submission URL Generation

Once deployed, use the live URL for your FlyRank capstone submission:
- Main website: `https://your-project.vercel.app`
- AI Agent: `https://your-project.vercel.app/agent`