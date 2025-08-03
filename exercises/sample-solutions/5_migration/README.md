# Sample Migration Commands

This exercise is primarily executed throught the CLI using prisma commands to perform the migration. Run
`npm run sample-5` to see the sample commands in action.

## Sample Commands:

### 1. Update schema (see [expand.prisma](./expand.prisma)) and generate the new prisma client

```bash
npx prisma generate \
    --schema exercises/sample-solutions/5_migration/expand.prisma
```

### 2. Create migration from expanded schema

```bash
npx prisma migrate dev \
    --name expand-lecternId \
    --schema exercises/sample-solutions/5_migration/expand.prisma
```

### 3. Deploy migration to production DB

This command will do nothing in this workshop since we are using a single DB. However, during real development where you may have multiple DBs, this command will apply any migrations to the datasource specified in schema.prisma

```bash
npx prisma migrate deploy \
    --schema exercises/sample-solutions/5_migration/expand.prisma
```

### 4. Migrate user data

In this scenario, it involves users logging in with both mechanisms. The next command simulates this.

```bash
npm run start-5
```

### 5. Update the schema and re-generate the client

```bash
npx prisma generate \
    --schema exercises/sample-solutions/5_migration/contract.prisma
```

### 6. Contract the schema and create a migration

```bash
npx prisma migrate dev \
    --name contract-user-ununsed-columns \
    --schema exercises/sample-solutions/5_migration/contract.prisma
```

### 7. Deploy the contracted schema

Like Step 2, this step will do nothing in this workshop since we don't have multiple DBs

```bash
npx prisma migrate deploy \
    --schema exercises/sample-solutions/5_migration/contract.prisma
```
