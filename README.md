# Aroosh Ahmad — Applied AI / ML Engineer portfolio

This repository contains the recruiter-facing portfolio for Aroosh Ahmad. It presents flagship public work across LLMs and agentic AI, RAG/NLP, real-time voice AI, computer vision/OCR, and Python AI/backend systems.

## Local development

```bash
npm install
npm run dev
```

The site is a React + TypeScript + Vite application styled with Tailwind CSS and animated with Framer Motion. Content is kept in page-level data modules under `src/pages` so project, experience, capability, education, and certification updates can be reviewed independently from layout code.

## Build and deployment

```bash
npm run lint
npm run build
npm run preview
```

GitHub Pages deployment uses the Vite base path `/portfolio/` and the `gh-pages` package configured in `package.json`. The public site is [arushahmd.github.io/portfolio](https://arushahmd.github.io/portfolio/).

## Content maintenance

- `src/pages/Home/personal.ts` — identity, positioning, navigation, and recruiter links
- `src/pages/Projects/projectsData.ts` — the five flagship public repositories
- `src/pages/Experience/experienceData.ts` — concise work history
- `src/pages/Skills/skillsData.ts` — capability groups
- `src/pages/About/aboutData.ts` — bio, education, and certification links
- `index.html`, `public/robots.txt`, and `public/sitemap.xml` — SEO and crawler metadata

### Contact form and EmailJS configuration

EmailJS sends directly only when all three of these variables are present and non-empty:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Set them in a local `.env`/`.env.local` file or in the build environment. Do not commit credentials. Keep the fallback recipient configured as:

```text
VITE_CONTACT_EMAIL=arooshahmad.data@gmail.com
```

If any EmailJS variable is missing, the form does not call EmailJS. It opens a prefilled `mailto:` message instead. The EmailJS template receives these frontend field names: `from_name`, `reply_to`, `message`, `to_email`, `owner_email`, `subject`, and `site_name`. Use `.env.example` as the configuration template.
