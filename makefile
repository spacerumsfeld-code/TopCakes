# Development

dev:
	npm run dev

# QA

lint:
	npm run lint

lint-fix:
	npm run lint-fix

typecheck:
	tsc emit

build:
	npm run build

test:
	npm run test

# Database

push-db:
	npx drizzle-kit push

generate-db:
	npx drizzle-kit generate

migrate-db:
	npx drizzle-kit migrate

# CICD
pre-commit-check:
	npm run lint
	npm run typecheck
	npm run build

# Mock Data
seed:
	DATABASE_URL=[changeme] npx tsx ./ops/seed.ts