# Useful Commands for Migration Workshop

1. Create a new migration (SQL) based on the current schema:

```bash
npx prisma migrate dev --name <migration-name>
```

2. Apply the migration to the database:

```bash
npx prisma migrate deploy
```

3. Check the status of migrations (only checks generated migrations):

```bash
npx prisma migrate status
```

4. Compare `schema.prisma` with the current database schema ([more options available](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-diff)):

```bash
npx prisma migrate diff \
--from-schema-datamodel ./exercises/5_migration/schema.prisma \
--to-schema-datasource ./exercises/5_migration/schema.prisma
```

# Baselining applied

To set-up this workshop, a baselining of the previous [sample solution](../sample-solutions/4_indexing/schema.prisma) was done. The following commands were applied to baseline the migration:

1. Generate `schema.prisma` based on current db schema. This is useful when starting out with a db that already has a schema.

```bash
npx prisma db pull
```

2. Create the baseline migration file

```bash
mkdir migrations
mkdir migrations/0_init
npx prisma migrate diff \
--from-empty \
--to-schema-datamodel exercises/5_migration/schema.prisma \
--script > exercises/5_migration/0_init/migration.sql
```

3. Mark the migration as applied, since the database is already in this state

```bash
npx prisma migrate resolve --applied 0_init
```

You can verify this by running the following command. You should see that the schema is up to date. This tells us that all migrations in the migrations folder have been applied to the current db specified in the url in `schema.prisma`

```bash
npx prisma migrate status
```
