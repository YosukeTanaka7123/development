import { InferSelectModel } from 'drizzle-orm'
import {
  boolean,
  date,
  integer,
  pgTable,
  serial,
  text,
  time,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

export const choices = pgTable('choices', {
  id: serial('id').primaryKey(),
  summary: varchar('summary', { length: 100 }).notNull(),
  dist_video_url: text('dist_video_url').notNull(),
  dist_video_date: date('dist_video_date').notNull(),
  dist_video_title: varchar('dist_video_title', { length: 100 }).notNull(),
  dist_video_time: time('dist_video_time').notNull(),
  votes: integer('votes').notNull().default(0),
  clip_video_url: text('clip_video_url'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
  deleted: boolean('deleted').notNull().default(false),
})

export type ChoiceRecord = InferSelectModel<typeof choices>
