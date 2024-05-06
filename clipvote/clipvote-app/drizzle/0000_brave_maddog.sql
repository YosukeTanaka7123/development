CREATE TABLE IF NOT EXISTS "choices" (
	"id" serial PRIMARY KEY NOT NULL,
	"summary" varchar(100) NOT NULL,
	"dist_video_url" text NOT NULL,
	"dist_video_date" date NOT NULL,
	"dist_video_title" varchar(100) NOT NULL,
	"dist_video_time" time NOT NULL,
	"votes" integer DEFAULT 0 NOT NULL,
	"clip_video_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted" boolean DEFAULT false NOT NULL
);
