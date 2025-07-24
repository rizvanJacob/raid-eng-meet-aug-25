# Exercise 3: Implementing a Physical Schema with Prisma

### (Optional)
Design the schema using any diagramming tool
<!-- ```mermaid

``` -->

### Schema Implementation

1. Implement the schema in `./prisma/schema.prisma`
2. From the project root folder, run `npm run start-3` to start
    - Prisma will push your schema onto the database
    - Your schema will be printed onto the console
    - Use Prisma Studio to view and interact with your data
3. Review the [sample solution](../sample-solutions/3_physical_schema.prisma)
    - Copy the `*.prisma` file into `./prisma/`
    - Add the following entry in `package.json`:
```json
"prisma": {
  "schema": "prisma/3_physical_schema.prisma"
}
```

