# Development
dev:
	npx sst dev

lint:
	pnpm run lint

lint-fix:
	pnpm run lint-fix

typecheck:
	pnpm run typecheck

build:
	pnpm run build

test-interactive:
	npx playwright codegen

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
	pnpm run test

test:
	pnpm run test

deploy:
	sst deploy --stage production