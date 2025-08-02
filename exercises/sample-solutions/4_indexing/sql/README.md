## Denormalization and Partial Indexing 

This set of SQL files demonstrates how to de-normalize and index a database using raw SQL Queries. In this case, we add an `isActive` column to the `Appointment` model to optimize queries that filter by active appointments. This columns is updated by the database trigger (see 1_createFunction.sql and 2_createTrigger.sql) and is indexed to improve query performance. This column is then partially indexed (only index where isActive is true) to optimize the performance of queries that filter by active appointments.

However, to reap the benefits of this optimization, we need to modify the query to filter on the `isActive` column instead of the `endDate`. For simplicity, this is not in this workshop's benchmarking exercise. 

**WARNING:** Adding triggers should be done with caution, as explained in this [guide](https://www.prisma.io/dataguide/datamodeling/functional-units#heres-why-you-might-not-want-to-program-your-database). It might seem like a brilliant idea that makes your code "cleaner" but it is easy to forget about them as a project grows. Some ORMs, like hibernate, provide hooks to run functions on data while residing in your application code instead of the database, but not all ORMs do this (Prisma does not). In that case, you are left with the decision to either use triggers or write the logic in your application code. Choose wisely!

## Full Text Search with Postgres and GIN

Further improvements can be made to the branch name search by using a GIN index for full text search. This is not included in this workshop, but can be explored in the [Postgres documentation](https://www.postgresql.org/docs/current/textsearch.html).