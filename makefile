# Development
dev:
	sst dev

lint:
	pnpm run lint

lint-fix:
	pnpm run lint-fix

typecheck:
	tsc --noEmit

# Data
push-db:
	npx drizzle-kit push

generate-migration:
	npx drizzle-kit generate

apply-migration:
	npx drizzle-kit migrate

seed:
	DATABASE_URL=[changeme] npx tsx ops/seed.ts

# CICD
pre-commit-check:
	pnpm run lint
	pnpm run typecheck
	pnpm run build

test:
	pnpm run test

build:
	pnpm run build

deploy:
	sst deploy --stage production