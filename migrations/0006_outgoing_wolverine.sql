CREATE TABLE IF NOT EXISTS "cakes_to_favorites" (
	"id" serial PRIMARY KEY NOT NULL,
	"address" varchar(255) NOT NULL,
	"cake_id" integer
);
--> statement-breakpoint
ALTER TABLE "cakes_to_battles" DROP CONSTRAINT "cakes_to_battles_cake_id_battle_id_pk";--> statement-breakpoint
ALTER TABLE "cakes_to_battles" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "cakes" ADD COLUMN "likes" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cakes_to_favorites" ADD CONSTRAINT "cakes_to_favorites_cake_id_cakes_id_fk" FOREIGN KEY ("cake_id") REFERENCES "public"."cakes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
