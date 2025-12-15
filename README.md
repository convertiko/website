# Convertiko Website

Marketing website for Convertiko Labs and the Convertiko FAQ Shopify app.

**Live site:** https://convertikolabs.com

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** Shadcn UI
- **Hosting:** Vercel

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Dev server runs at http://localhost:3000

## Structure

```
src/app/
├── page.tsx            # Homepage (FAQ product landing page)
├── layout.tsx          # Root layout with metadata
├── globals.css         # Tailwind + theme variables
└── apps/
    ├── page.tsx        # Apps listing page
    └── faq/
        └── page.tsx    # Redirects to homepage

src/components/ui/      # Shadcn components
```

## Pages

| Path | Description |
|------|-------------|
| `/` | Main landing page for Convertiko FAQ |
| `/apps` | Apps listing (for future products) |
| `/apps/faq` | Redirects to `/` |
| `/#pricing` | Pricing section anchor |

## Deployment

Automatically deployed via Vercel on push to `main`.

### Vercel Setup

1. Connected to `convertiko/website` repo
2. Framework: Next.js (auto-detected)
3. Custom domain: `convertikolabs.com` and `www.convertikolabs.com`

### DNS Configuration

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Related Repositories

| Repository | Description | URL |
|------------|-------------|-----|
| `miaouxtoo/convertiko-faq` | Main Shopify app (private) | - |
| `convertiko/website` | This website | https://convertikolabs.com |
| `convertiko/docs-faq` | Documentation site | https://docs.convertikolabs.com |

## Editing Content

### Updating Pricing

Edit the pricing array in `src/app/page.tsx` (around line 335).

### Updating Features

Edit the features array in `src/app/page.tsx` (around line 221).

### Adding New Pages

1. Create directory in `src/app/`
2. Add `page.tsx` with component
3. Update navigation links if needed

## Theme

Primary color is Convertiko orange (`#ff6b35`). Defined in `globals.css`:

```css
:root {
  --primary: 24 95% 53%;  /* Orange */
}
```
