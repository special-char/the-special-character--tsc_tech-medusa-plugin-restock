import { Migration } from '@mikro-orm/migrations';

export class Migration20250401090540 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "restock_subscription" drop constraint if exists "restock_subscription_variant_id_sales_channel_id_email_unique";`);
    this.addSql(`create table if not exists "restock_subscription" ("id" text not null, "variant_id" text not null, "sales_channel_id" text not null, "email" text not null, "customer_id" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "restock_subscription_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_restock_subscription_deleted_at" ON "restock_subscription" (deleted_at) WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_restock_subscription_variant_id_sales_channel_id_email_unique" ON "restock_subscription" (variant_id, sales_channel_id, email) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "restock_subscription" cascade;`);
  }

}
