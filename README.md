# Magtech Surveys website

Astro static site. Fully indexable HTML, no client-side rendering.

## Run locally

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # outputs to dist/

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard -> Workers & Pages -> Create -> Pages -> connect the repo.
3. Framework preset: Astro. Build command: npm run build. Output directory: dist.
4. Add custom domain magtechsurveys.com.au (move DNS to Cloudflare or CNAME from iwantmyname).

## Contact form

The form on /contact/ posts to Web3Forms (free). Create a key at web3forms.com
and replace YOUR_ACCESS_KEY in src/pages/contact.astro. Submissions arrive by email.

## Adding a case study

Drop a markdown file in src/content/case-studies/. Frontmatter fields:
title, location, services (list), area, year, summary. The file name becomes the URL slug.

## Adding a service page

Copy any file in src/pages/services/, edit the copy and the <Base title/description>.
It appears in the sitemap automatically. Add it to the nav in src/components/Nav.astro.

## Before cutover from Readymag

- List your currently indexed pages (site:magtechsurveys.com.au and Search Console).
- Recreate or redirect any URL that ranks. Redirects go in a public/_redirects file
  (Cloudflare Pages format: /old-path /new-path 301).
- Keep Google Analytics: add your GA tag to src/layouts/Base.astro if you want to
  retain measurement (G-WNSSS6CKWZ is the property currently on the Readymag site).
