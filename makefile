# Development
dev:
	npx sst dev

# Run 'make dev' in a separate pane first.
pre-commit-check:
	pnpm run lint
	pnpm run typecheck
	pnpm run build
	pnpm run test

test-ui:
	npx playwright test --ui

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
	pnpm run build

cicd-deploy-test-infra:
	npx sst deploy --stage test

cicd-test:
	pnpm run test

cicd-deploy:
	npx sst deploy --stage production