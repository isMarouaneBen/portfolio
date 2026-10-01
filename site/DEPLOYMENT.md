# Vercel deployment

Import the `isMarouaneBen/portfolio` GitHub repository with these project settings:

| Setting | Value |
| --- | --- |
| Root Directory | `site` |
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` (Next.js default) |
| Install Command | Default (`npm install`) |
| Node.js Version | 24.x |

The `vercel.json` in this directory specifies the framework, build command, and output directory. The Root Directory must be set in Vercel's project settings.

The portfolio does not require environment variables. Run `npm run build` inside `site` to validate the production build locally. Use `npm start` to serve that build or `npm run dev` for development on port 5173.

## Missing routes-manifest.json

The earlier build script used Vinext and emitted Cloudflare-oriented output under `dist`, rather than a Next.js build under `.next`. Vercel's Next.js integration therefore could not find `.next/routes-manifest.json`.

The build script now runs `next build --webpack` and generates the standard Next.js artifacts. Push these changes and redeploy the new commit. If previous custom Vercel overrides are still present, set them to the values above and redeploy without the previous build cache.
