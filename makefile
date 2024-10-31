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
# Need to run make dev in separate pane for links to work.
pre-commit-check:
	pnpm run lint
	pnpm run typecheck
	sst dev pnpm run build

test:
	pnpm run test

build:
	pnpm run build

# Multiplexer runs; sst links work.
deploy:
	sst deploy --stage production