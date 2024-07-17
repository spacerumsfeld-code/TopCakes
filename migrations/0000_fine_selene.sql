CREATE TABLE IF NOT EXISTS "battles" (
	"id" integer PRIMARY KEY NOT NULL,
	"cake1_id" integer NOT NULL,
	"cake2_id" integer NOT NULL,
	"winner_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cakes_to_battles" (
	"id" serial NOT NULL,
	"cake_id" integer,
	"battle_id" integer,
	CONSTRAINT "cakes_to_battles_cake_id_battle_id_pk" PRIMARY KEY("cake_id","battle_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cakes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"image_url" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"recipe" varchar(255) NOT NULL,
	"ingredients" text[] DEFAULT '{}'::text[] NOT NULL,
	"description" varchar(1024) NOT NULL,
	"wins" integer DEFAULT 0 NOT NULL,
	"losses" integer DEFAULT 0 NOT NULL,
	"vector" integer[] DEFAULT '{}'::integer[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"created_at" date DEFAULT now() NOT NULL,
	"last_updated_at" date DEFAULT now() NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "battles" ADD CONSTRAINT "battles_cake1_id_cakes_id_fk" FOREIGN KEY ("cake1_id") REFERENCES "public"."cakes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "battles" ADD CONSTRAINT "battles_cake2_id_cakes_id_fk" FOREIGN KEY ("cake2_id") REFERENCES "public"."cakes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "battles" ADD CONSTRAINT "battles_winner_id_cakes_id_fk" FOREIGN KEY ("winner_id") REFERENCES "public"."cakes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cakes_to_battles" ADD CONSTRAINT "cakes_to_battles_cake_id_cakes_id_fk" FOREIGN KEY ("cake_id") REFERENCES "public"."cakes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cakes_to_battles" ADD CONSTRAINT "cakes_to_battles_battle_id_battles_id_fk" FOREIGN KEY ("battle_id") REFERENCES "public"."battles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
