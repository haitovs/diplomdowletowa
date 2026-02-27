# ── Stage 1: Install & Build ─────────────────────────────
FROM node:20-alpine AS builder

RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma/ ./prisma/

RUN npm ci
RUN npx prisma generate

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL="file:/app/prisma/dev.db"
ENV NEXTAUTH_SECRET="build-time-placeholder"
ENV NEXTAUTH_URL="http://localhost:4082"
RUN npm run build

# ── Stage 2: Production Runtime ─────────────────────────
FROM node:20-alpine

RUN apk add --no-cache openssl

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=4082
ENV DATABASE_URL="file:/app/prisma/dev.db"
ENV NEXTAUTH_SECRET="dowletowa-demo-secret-not-for-production"
ENV NEXTAUTH_URL="http://localhost:4082"

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Copy Prisma files + pre-seeded DB
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copy prisma CLI for db push at startup
COPY --from=builder /app/node_modules/prisma ./node_modules/prisma
COPY --from=builder /app/node_modules/@prisma/engines ./node_modules/@prisma/engines

EXPOSE 4082

# Create upload directory
RUN mkdir -p /app/data/uploads/products

# Startup: apply schema changes to existing DB, then run the app
COPY <<'EOF' /app/start.sh
#!/bin/sh
echo "Applying schema changes..."
npx prisma db push --skip-generate 2>&1 || echo "Schema push warning (non-fatal)"
echo "Starting server..."
exec node server.js
EOF

RUN chmod +x /app/start.sh

CMD ["/bin/sh", "/app/start.sh"]
