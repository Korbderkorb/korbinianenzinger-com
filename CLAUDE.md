# Mutualism Portfolio - Claude Code Guidelines

## Project Overview

**Mutualism** is a personal portfolio website for Korbinian Enzinger showcasing projects and writing at the intersection of architecture, biology, and advanced fabrication technologies.

- **Domain**: https://korbinianenzinger.com
- **Hosted**: Cloudflare Pages
- **Repository**: GitHub (korbinianenzinger-com)
- **Status**: Production site

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (via CDN, not installed)
- **Routing**: React Router v7 (HashRouter for client-side routing)
- **Fonts**: Space Grotesk, Roboto Mono (from Google Fonts)
- **Package Manager**: npm

## Project Structure

```
korbinianenzinger-com/
├── index.html            # HTML entry point (Vite)
├── index.tsx             # React DOM entry point (Vite entry)
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
├── CLAUDE.md             # This file
├── src/                  # All source code
│   ├── App.tsx           # Root component with routing
│   ├── constants.ts      # All project/blog content data
│   ├── types.ts          # TypeScript type definitions
│   ├── components/       # Reusable UI components
│   └── pages/            # Page components (Home, About, Projects, Blog, etc.)
├── public/               # Static files (robots.txt, sitemap.xml, _redirects)
└── dist/                 # Build output (created by npm run build, gitignored)
```

## Important Principles

### ⚠️ No AI Features on Website

This is a **strictly non-AI** website. Do not add:
- AI chatbots or conversational interfaces
- LLM-powered content generation
- Machine learning features
- API keys or calls to AI services (e.g., Gemini, OpenAI, Claude API)

All content is static and data-driven from `src/constants.ts`.

### Development Branch Strategy

1. **All development happens on the `dev` branch** — never commit directly to `main`
2. User merges `dev` → `main` manually after reviewing changes
3. Cloudflare is configured to deploy from `main` branch automatically

### Content Management

All project and blog content is stored as JavaScript objects in `src/constants.ts`:

```typescript
export const FEATURED_PROJECTS: Project[] = [...]
export const BLOG_POSTS: BlogPost[] = [...]
export const BIO_TEXT: string = `...`
export const PHILOSOPHY_TEXT: string = `...`
```

Each content item has a rich structure supporting text, images, videos, galleries, blockquotes, etc. (see `src/types.ts` for the `ContentBlock` types).

## Build & Deployment

### Local Development

```bash
npm install
npm run dev          # Start dev server on http://localhost:3000
npm run lint         # Type-check with TypeScript
```

### Production Build

```bash
npm run build        # Outputs to dist/
npm run preview      # Preview dist/ locally
```

### Cloudflare Pages Deployment

**Current Configuration:**
- **Production Branch**: `main`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: None required

**Deploy Flow:**
1. Push to `main` branch on GitHub
2. Cloudflare Pages automatically detects the push
3. Runs build command and deploys `dist/` to korbinianenzinger.com

No manual deployment steps needed — it's fully automated via Git integration.

## Key Files & Responsibilities

| File | Purpose |
|------|---------|
| `src/constants.ts` | Content database: projects, blog posts, bio, philosophy |
| `src/App.tsx` | Route definitions and layout wrapper |
| `src/pages/Home.tsx` | Hero section + featured projects + blog preview |
| `src/pages/Projects.tsx` | Full projects gallery |
| `src/pages/Blog.tsx` | All blog posts |
| `src/pages/GenericDetail.tsx` | Detail page renderer (reused for projects & blog) |
| `public/_redirects` | SPA routing fallback for Cloudflare Pages |
| `public/robots.txt` | Search engine rules + sitemap location |
| `public/sitemap.xml` | XML sitemap for SEO |
| `index.html` | HTML template with Tailwind CDN + font imports |

## Customization & Common Tasks

### Adding a New Project

1. Edit `src/constants.ts`
2. Add a new object to `FEATURED_PROJECTS` array:
   ```typescript
   {
     id: 'project-slug',
     title: 'Project Title',
     category: 'Category',
     date: '2026-01-15',
     description: 'Short description',
     imageUrl: 'https://...',
     content: [/* rich content blocks */],
     hasIntro: false,
     introVideoUrl: 'optional-video-url'
   }
   ```
3. Commit to `dev` branch
4. Test locally: `npm run dev` → visit http://localhost:3000/#/projects

### Adding a Blog Post

Same process as projects — add to `BLOG_POSTS` array in `src/constants.ts`.

### Updating Bio/Philosophy

Edit the strings `BIO_TEXT` and `PHILOSOPHY_TEXT` in `src/constants.ts`.

### Styling Changes

Tailwind classes are configured in `index.html` with custom colors:
- `bg-main-dark` / `text-main-dark` → #161616
- `bg-main-light` / `text-main-light` → #e9e9e9
- `bg-main-accent` / `text-main-accent` → #3898EC

All styling is done via Tailwind utility classes in JSX files. No separate CSS files.

## Debugging & Troubleshooting

### TypeScript Errors

```bash
npm run lint
```

### Build Issues

```bash
rm -rf node_modules dist
npm install
npm run build
```

### Preview Changes Before Deploy

```bash
npm run build
npm run preview  # Opens dist/ at http://localhost:4173
```

## Git Workflow

```bash
# Start a new feature
git checkout dev
git pull origin dev

# Make changes, commit
git add .
git commit -m "Brief description"

# Push to dev
git push origin dev

# When ready to deploy (manual):
# 1. Review changes on GitHub
# 2. Create a pull request dev → main
# 3. Merge to main
# 4. Cloudflare auto-deploys
```

## Useful Links

- **Production Site**: https://korbinianenzinger.com
- **Cloudflare Dashboard**: https://dash.cloudflare.com/
- **GitHub Repository**: https://github.com/Korbderkorb/korbinianenzinger-com
- **Design Colors**: See custom theme in `index.html` Tailwind config

## Contact & Questions

For issues or questions about deployment, editing content, or feature requests, check this file first. If something is broken or unclear, update this guide!

---

**Last Updated**: 2026-04-12
