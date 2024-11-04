# Development
dev:
	npx sst dev

# Run make dev in separate pane first for links to work.
pre-commit-check:
	pnpm run lint
	pnpm run typecheck
	sst dev pnpm run build
	pnpm run test

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
cicd-lint:
	pnpm run lint

cicd-typecheck:
	pnpm run typecheck

cicd-build:
	npx sst shell pnpm run build

cicd-test:
	pnpm run test

cicd-deploy:
	sst deploy --stage production