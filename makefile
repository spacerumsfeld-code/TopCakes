dev:
	npm run dev

lint:
	npm run lint

lint-fix:
	npm run lint --fix

# Database

push-db:
	npx drizzle-kit push

generate-db:
	npx drizzle-kit generate

migrate-db:
	npx drizzle-kit migrate