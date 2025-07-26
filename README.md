# AI Uncensored Master

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), extended with custom UI components, utilities, and project documentation.

## Project Structure

```
components.json
eslint.config.mjs
LICENSE
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
docs/
	plan.md                # Project planning and documentation
public/
	*.svg                  # Public SVG assets
	favicon.ico            # Favicon
src/
	app/
		favicon.ico
		globals.css          # Global styles
		layout.tsx           # App layout
		page.tsx             # Main page
	components/
		ui/                  # Custom UI components (alert, badge, button, card, separator)
	lib/
		utils.ts             # Utility functions
```

## Custom Components and Utilities

This project includes reusable UI components and utility functions to accelerate development:

- **UI Components** (`src/components/ui`):
  - `alert.tsx`, `badge.tsx`, `button.tsx`, `card.tsx`, `separator.tsx`
  - Use these for consistent design and rapid prototyping.
- **Utilities** (`src/lib/utils.ts`):
  - Common helper functions for use throughout the app.

## Project Planning

For detailed project planning, see [`docs/plan.md`](docs/plan.md).

## Getting Started

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Editing the App

To modify the main page, edit `src/app/page.tsx`.
To change the global layout, edit `src/app/layout.tsx`.
For global styles, use `src/app/globals.css`.
The app will auto-update as you edit these files.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
