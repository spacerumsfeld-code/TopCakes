ALTER TABLE "cakes" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "cakes" ADD COLUMN "last_updated_at" timestamp DEFAULT now() NOT NULL;