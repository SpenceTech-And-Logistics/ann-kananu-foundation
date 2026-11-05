# Ann Kananu Foundation website

Six-page React and Vite site for the Ann Kananu Foundation's Nutrition & Chronic Care Project (NCCP) programme. All content lives in `src/data/site.js`.

## Run it

```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
```

## Deploy to Cloudflare Workers

`wrangler.jsonc` serves `dist/` and sends page addresses to the React app.

```bash
npm run build
npx wrangler deploy
```

## Check before going public

- Milestones and results: confirm whether the figures are reached or targeted, then word the Impact page to match.
- National figures: confirm the sources, especially that 57% of deaths are malnutrition-linked alongside NCDs at 27% of all deaths.
- Donations: add payment details to `donate` in `src/data/site.js`. The form on the Donate page stays switched off until a payment provider is connected.
- Contact details: add the phone number and email to `org` in `src/data/site.js`. The footer, Contact page and Get involved links appear automatically.
