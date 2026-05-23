# Cai Dongchen / 蔡東辰 Artist Website

Static Astro site for `damao2048.com`. The site uses a quiet gallery/archive structure inspired by contemporary gallery artist pages:

- Home
- Works
- Statement
- CV
- Contact

## Local Development

```bash
npm install
npm run dev
```

Astro will start a local preview, usually at `http://localhost:4321`.

## Editing Content

Project data lives in:

```text
src/data/projects.ts
```

CV data lives in:

```text
src/data/cv.ts
```

The downloadable CV PDF lives in:

```text
public/files/cai-dongchen-cv.pdf
```

General site metadata lives in:

```text
src/data/site.ts
```

Images live in:

```text
public/images/
```

The full portfolio image archive currently lives in:

```text
public/images/portfolio/full/
```

To add a new work, place web-sized images in `public/images/portfolio/full/`, then add a new object to `src/data/projects.ts`. Keep captions precise:

```text
Title, year, medium or installation view, venue, city.
Photo: photographer name.
```

## Build

```bash
npm run build
```

The static site will be generated in `dist/`.

## Deploy To Vercel

1. Create a GitHub repository, for example `damao2048-artist-site`.
2. Push this folder to GitHub.
3. In Vercel, choose `Add New... > Project`.
4. Import the GitHub repository.
5. Framework preset should be `Astro`.
6. Build command: `npm run build`.
7. Output directory: `dist`.
8. Deploy.

## Connect `damao2048.com`

After the Vercel deployment is working:

1. Open the Vercel project.
2. Go to `Settings > Domains`.
3. Add `damao2048.com`.
4. Also add `www.damao2048.com` if you want the `www` version.
5. Copy the exact DNS records Vercel gives you into your domain registrar.
6. Do not delete MX records if the domain is used for email.
7. Wait for DNS and HTTPS certificate provisioning to complete.

Use Vercel's displayed values as the source of truth. Do not guess DNS records.
