# Development
dev:
	sst dev pnpm run dev

lint:
	pnpm run lint

lint-fix:
	pnpm run lint-fix

typecheck:
	tsc emit

# Data
push-db:
	npx drizzle-kit push

generate-db:
	npx drizzle-kit generate

migrate-db:
	npx drizzle-kit migrate

# CICD
pre-commit-check:
	pnpm run lint
	pnpm run typecheck
	pnpm run build
	# npm run test

test:
	pnpm run test

build:
	pnpm run build

deploy:
	sst deploy --stage production