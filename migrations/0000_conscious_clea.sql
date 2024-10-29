DO $$ BEGIN
 CREATE TYPE "public"."type" AS ENUM('Angel Food', 'Bundt', 'Carrot', 'Cheesecake', 'Chiffon', 'Cupcake', 'Fruitcake', 'Genoise', 'Ice Cream Cake', 'Layer Cake', 'Pound Cake', 'Sheet Cake', 'Sponge Cake', 'Upside Down Cake', 'Black Forest', 'Chocolate Cake', 'Chocolate Lava', 'Flourless Chocolate', 'Battenberg', 'Basque Burnt Cheesecake', 'Cassata', 'Japanese Cheesecake', 'Lamington', 'Mille-Feuille', 'Opera Cake', 'Panettone', 'Pavlova', 'Red Velvet', 'Rum Cake', 'Sacher Torte', 'Tres Leches', 'Victoria Sponge', 'Drip Cake', 'Funfetti', 'Geode Cake', 'Mirror Glaze', 'Naked Cake', 'Ombre Cake', 'Pinata Cake', 'Rainbow Cake', 'Rosette Cake', 'Keto Cake', 'Gluten-Free Cake', 'Vegan Cake', 'Sugar-Free Cake', 'Baklava Cake', 'Bibingka', 'Black Sesame Cake', 'Gulab Jamun Cake', 'Mochi Cake', 'Tiramisu', 'Ube Cake', 'Yule Log', 'Halloween Cake', 'Christmas Fruitcake', 'Easter Lamb Cake', 'St. Patrick''s Day Cake', 'Birthday Cake', 'Wedding Cake', 'Baby Shower Cake', 'Engagement Cake', 'Graduation Cake', 'Custom Cake', 'Other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "battles" (
	"id" serial PRIMARY KEY NOT NULL,
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
	"description" varchar(1024) NOT NULL,
	"image_url" varchar(255) NOT NULL,
	"wins" integer DEFAULT 0 NOT NULL,
	"type" "type",
	"ingredients" jsonb DEFAULT '[]'::jsonb NOT NULL
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
