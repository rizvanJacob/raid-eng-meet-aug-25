# Data Schema Modelling Workshop

_RAiD Engineering Meetup Aug 2025_

---
## Objectives

1. From real-world stories to database schema
2. Clean, efficient, and easy to change design
3. Confidence with database design tools
4. Improve database speed
5. Change database schema without breaking things

---
## Agenda

1. [Introduction to Schema and Tools](#introduction-to-schema-and-tools)
3. [Designing Conceptual Schema](#conceptual-schema)
4. [Designing Logical Schema](#logical-schema)
5. [Implementing Physical Schema with Prisma](#physical-schema)
6. [Database Indexing](#indexing)
7. [Schema Change and Migrations](#migrations)

---
## Instructions

1. Clone or fork this repository
3. [Workshop Scenario](materials/0_Workshop_Scenario.md)
4. Attempt the exercises along the way
    - Check out the [sample solutions](materials/sample-solutions)
5. Ask questions - raise a hand or ask your neighbor
6. If this is too easy for you, help a neighbor

---
## Prerequisites

- A laptop with:
    - Node
    - Docker
    - Visual Studio Code or other code editor

- Basic knowledge of:
    - Typescript
    - Express.js

---
## Types of Schema

| Feature               | Conceptual | Logical | Physical |
|-----------------------|:----------:|:-------:|:--------:|
| Entity Names          |     ✅      |   ✅    |          |
| Entity Relationships  |     ✅      |   ✅    |          |
| Attributes            |            |   ✅    |          |
| Primary/Foreign Keys  |            |   ✅    |   ✅     |
| Table/Column Names    |            |         |   ✅     |
| Column Data Types     |            |         |   ✅     |

---
### Conceptual Schema

- High-level design of ***entities*** and ***relationships***
    - **Entity**: type of data 
    - [**Relationship**](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*HbaPwlVdszf8etER.png): how entities are connected
- Map out the entities represented in the system

```mermaid
%%{init: 
    {
        'theme': 'neutral', 
        'darkMode': false,
        'look': 'handDrawn'
    }
}%%
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER }|--|{ ADDRESS : has
```

---
### Logical Schema

- Medium level design, adding ***attributes*** and ***keys*** to entities
    - **Attribute**: data stored in an entity
    - **Primary Key**: unique identifier for an entity
    - **Foreign Key**: reference to another entity's primary key
- Define where and how data is stored

```mermaid
%%{init: 
    {
        'theme': 'neutral', 
        'darkMode': false,
        'look': 'handDrawn'
    }
}%%
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string email
        string phone
    }
    ORDER {
        date orderDate
        string status
        float amount
    }
    CUSTOMER }|--|{ ADDRESS : has
    ADDRESS {
        string line1
        string line2
        string zip
    }
```

---
### Physical Schema

- Full implementation details
- Dependent on the database system
- Includes:
    - Table & Column names
    - Data types (specific to the db, e.g. `VARCHAR(255)`)
    - Indexes
    - Constraints (optional)

---
### Tools for Schema Design
- Powerpoint, slides, miro, whiteboard
- [Draw.io](https://draw.io)
- [**Mermaid.js**](https://mermaid.js.org/)
    - Natively supported by github & gitlab
    - [VS Code extension](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)
    - [Online editor](https://mermaid.live/)

---
### Exercise 1: Designing Conceptual Schema

- Design a conceptual schema for the [workshop scenario](materials/0_Workshop_Scenario.md)
- Use any tool as you prefer
- Skip relationship types for now
- [Sample solution](exercises/sample-solutions/1_Conceptual_Schema.md)

---
### Exercise 2: Designing Logical Schema

- Design a logical schema for the [workshop scenario](materials/0_Workshop_Scenario.md)
- Think of other unexplicit requirements
    - Edge cases
    - Non-functional
- [Sample solution](`2_Logical_Schema.md`)

---
### Database Normalization

- Eliminate duplicates
- Normalization Forms:

    1. [First Normal Form](#first-normal-form-1nf): "No repeating groups"
        - One value per column, per row
        - Minimum required to run a pivot table

    2. [Second Normal Form](#second-normal-form-2nf): "No partial dependencies"
        - No repeated column values across rows*

    3. [Third Normal Form](#third-normal-form-3nf): "No transitive dependencies"
        - No column that depends on another column
        - No column that can be derived from another column

- Evaluated ***per relationship***
-v-
#### First Normal Form (1NF)

Conceptual & Logical Schema:
```mermaid
erDiagram
    ORDER {
        string name
        string contact
        string email
        string deliveryAddressLine1
        string deliveryAddressLine2
        string deliveryAddressZip
        date orderDate
        string status
        float amount
    }
```

<small>
Orders:

|name| contact...     |zip ...   | status | amount | orderDate  |
|------|-----------|------------|-------|-------------|------------|
|Alice  | 123456789 | 10001 | paid        | 100        | 2024-01-01|
|Alice   | 123456789 | 10001 | shipped     | 200        | 2024-01-05|
|Bob    | 987654321 | 20002 | pending     | 300        | 2024-02-01|
</small>

-v-
#### Second Normal Form (2NF)

Conceptual & Logical Schema:
```mermaid
erDiagram
    ORDER {
        date orderDate
        string status
        float amount
    }
    CUSTOMER {
        string name
        string contact
        string email
        string addressLine1
        string addressLine2
        string zip        
    }
    CUSTOMER ||--o{ ORDER: places
```

-v-
#### Second Normal Form (2NF)

<small>
Customers:

|id | name         | phone     | line1       | line2   | zip|
|-----------|--------------|-----------|-------------|---------|-----|
|1| Alice Smith  | 123456789 | 12 Main St  | Apt 3B  | 10001|
|2| Bob Jones    | 987654321 | 99 River Rd | -       | 20002|

Orders:
|id | status   | amount | Date|
|----------|----------|--------|------------|
|   1   | paid     | 100   | 2024-01-01|
|   1   | shipped  | 200   | 2024-01-05|
|   2   | pending  | 300   | 2024-02-01|
</small>

-v-
#### Third Normal Form (3NF)

<small>
Customers:

| id | name         | email             | phone       | addressId |
|------------|--------------|-------------------|-------------|-----------|
| 1          | Alice Smith  | alice@example.com | 1234567890  | 101       |
| 2          | Bob Jones    | bob@example.com   | 9876543210  | NULL      |
| 3          | Carol White  | carol@example.com | 4561237890  | 102       |

Addresses:

| id | line1         | line2     | zip    |
|-----------|---------------|-----------|--------|
| 101       | 12 Main St    | Apt 3B    | 10001  |
| 102       | 500 Oak Ave   | Unit 7A   | 30303  |

Orders:

| id | customerID | orderDate  | status    | amount |
|---------|------------|------------|-----------|--------|
| 201     | 1          | 2024-01-01 | paid      | 100.00 |
| 202     | 1          | 2024-01-05 | shipped   | 200.00 |
| 203     | 2          | 2024-02-01 | pending   | 300.00 |
| 204     | 3          | 2024-03-12 | delivered | 150.00 |
</small>

*See previous examples for conceptual & logical schema*

---
### [Prisma ORM](https://www.prisma.io/)

- Mordern, Typesafe ORM in RAiD's stack

- Provides an API to [define your model in code](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)

```prisma
model Customer {
    id               Int     @id @default(autoincrement())
    name             String
    email            String  @unique
    phone            String
    orders[]         Order
    address?         Address
}

model Order {
    id               Int     @id @default(autoincrement())
    orderDate        Date
    status           String
    totalAmount      Float
    user             User    @relation(fields: [userId], references: [id])
    userId           Int
}

model Address {
    id               Int     @id @default(autoincrement())
    user             User    @relation(fields: [userId], references: [id])
    userId           Int     @unique
}
```

---
### Exercise 3: Implement Physical Schema with Prisma

- Design and implement physical schema for the [workshop scenario](materials/0_Workshop_Scenario.md)

- Use Prisma to [define your models](./exercises/3_physical_schema.prisma)

- Run `npm run start-3` to observe the schema generation

- See [prisma instructions](materials/3_Prisma_Instructions.md) to generate and use the client

- Run `npm run sample-3` to observe the [sample solution](./exercises/sample-solutions/3_physical_schema.prisma)

---
### Common Patterns for RSAF

- Soft deletion
    - Audit purposes
    - Support rollback/undo

- Audit logs/data versions
    - Track who/when performed actions
    - Track changes to data over time
    - Support rollback/undo

---
### [Indexing](https://www.postgresql.org/docs/current/indexes-types.html)

- Speeds up data retrieval

- But, adds overhead to modicifications

- Create indexes via:
    - SQL Commands
    - [Prisma](https://www.prisma.io/docs/orm/prisma-schema/data-model/indexes)

- Types of Indexes:
    - **B-tree**: equality & range (default for PG)
    - ~~**Hash**: Fast for equality checks, but not range queries~~
    - **GIN**: Full text search
    - **GiST**: nearest neighbor - good for spatial data

---
### Exercise 4: Compare Indexing Performance

---
### Migrations
