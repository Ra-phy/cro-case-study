# Ecommerce CRO case study

A responsive editorial case study by Raphael Adebisi. All copy, layout and styling are editable. No framework, package install, build tool, API key, hosted font, CDN or external JavaScript dependency is required.

## Files
- `index.html` — page content, hero, navigation, image descriptions and evidence.
- `styles.css` — responsive layout, palette, typography and components.
- `script.js` — accessible image viewer, keyboard dismissal and focus restoration.
- `assets/` — five authentic project images, including before/after, results and both trends.
- `netlify.toml` — publish the current directory with no build step.
- `.nojekyll` — serve files directly on GitHub Pages.
- `README.md` — this guide.

## Preview locally
Open `index.html` in your browser. Alternatively, run `python3 -m http.server 8080` in this folder and open http://localhost:8080.

## Deploy to Netlify
Extract the ZIP. Upload the `CRO-Case-Study` folder using Netlify's manual deployment option. `index.html` must be at the top level of that folder. For a Git-connected deployment, use this folder as the repository root, leave the build command empty and set the publish directory to `.`. The included netlify.toml supplies that publish setting.

## Deploy to GitHub Pages
Upload the CONTENTS of `CRO-Case-Study` to your repository root, including `assets`, `index.html`, `styles.css`, `script.js` and `.nojekyll`. Enable Pages from your main branch and the root directory. All asset paths are relative, so they work under both a repository URL and a custom domain. No workflow or Node dependencies are required for branch-based Pages hosting.

## Editing
Change narrative text in index.html. Design tokens start at the top of styles.css; the final “Refined editorial system — version 2” section contains the redesigned components and overrides. Keep the assets folder next to index.html and preserve filenames when replacing images. Make edits to the HTML text rather than rasterising it.

## Content conventions
The client and testing platform remain anonymous. The metrics screenshot is the source of truth. Reported lifts are relative changes; conversion also increased by 0.83 percentage points. The 95% confidence claim is attributed to the project report. Original graphs are preserved, with their CVR endpoint discrepancy explained in expandable notes. RPV corresponds to revenue per session in the supplied table. Total-revenue lift is not claimed as traffic-normalised lift or ROAS. Behavioural explanations are interpretations, not separately proven mechanisms.

## Validation
Reviewed in a desktop browser and at a 375px mobile content width. Verified local image loading, image viewer opening/closing, navigation targets and deployment package asset paths. All essential content remains available without JavaScript. Reduced-motion preferences are respected.
