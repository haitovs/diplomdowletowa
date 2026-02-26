# Dowletowa v2

Dowletowa v2 is a diploma/demo e-commerce platform for Turkmen textile products.  
It combines a public storefront and an admin panel for managing a catalog of stores, categories, products, and orders.

## What this project is about

This project showcases:

- A themed marketplace experience around Turkmen textile heritage (carpets, silk, cotton, denim, home textiles).
- A multilingual storefront (`tk`, `en`, `ru`) with product discovery and detail pages.
- Session-based shopping cart and product comparison flows.
- A simulated checkout that creates orders in the database.
- Admin-only management for stores, categories, products, and order tracking.

It is intended as a demonstration/academic project, not a production payment system.

## Core features

- Product catalog with search, sorting, and filtering by category/manufacturer.
- Featured products and latest arrivals on the homepage.
- Compare list with a limit of 3 products per session.
- Cart and checkout flow with order creation.
- Admin dashboard with stats and recent orders.
- Credentials-based authentication for admin access.
- Prisma + SQLite data layer with seed data for demo content.

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Prisma ORM
- SQLite
- NextAuth (Credentials provider)
- Tailwind CSS

## Local development

1. Install dependencies:

```bash
npm ci
```

2. Set environment variables in `.env` (minimum):

```env
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="replace-with-a-strong-secret"
NEXTAUTH_URL="http://localhost:3000"
```

3. Prepare database and seed data:

```bash
npm run db:push
npm run db:seed
```

4. Start dev server:

```bash
npm run dev
```

## Demo admin account

When seeded, the default admin credentials are:

- Email: `admin@dowletowa.tm`
- Password: `admin`

Change these for any non-demo use.

## Docker

You can run this project with Docker Compose:

```bash
docker compose up --build
```

The app is configured to run on port `4082` in `docker-compose.yml`.

## Project structure

- `src/app` - App Router pages (storefront, cart, compare, checkout, admin)
- `src/components` - Reusable UI and admin components
- `src/lib` - Prisma client and i18n helpers
- `prisma/schema.prisma` - Database models
- `prisma/seed.ts` - Demo data seeding script
- `public/images` - Static image assets

