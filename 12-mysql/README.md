## Unit 12 - Intro to MySQL

### Overview

In this week, we are starting working with databases by introducing MySQL and SQL queries before connecting them to Node and user-input.

### Homework Activities


### Key Activities

* [Favorites DB](1-Class-Content/12.1/Activities/02-FavoriteDB-NoData)
* [Programming DB](1-Class-Content/12.1/Activities/04-programmingDB)
* [Books DB](1-Class-Content/12.1/Activities/05-booksDB)

### Class Videos
* [Saturday - 12.1 (Part 1)](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=13039edc-6023-4b92-868a-a8bf01736a3a)
* [Saturday - 12.1 (Part 2)](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7a864dea-5f3d-41c9-9044-a8c000012be6)
* [Monday - 12.2](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=de7071d0-f80e-4c86-925d-a98200137f7a)

### Helpful Links

* [MySQL Cheat Sheet](https://gist.github.com/arosenkranz/0090a2a91277bf71f9960bb0e35712ba)
* [Whiteboarding Gitbook with Example Questions](https://www.gitbook.com/read/book/the-coding-bootcamp/whiteboarding-algorithms-and-interview-questions?key=technicalInterview)
* [MySQL - W3 Schools](http://www.w3schools.com/sql/)
* [MySQL Workbench Documentation](http://dev.mysql.com/doc/workbench/en/)
* [MySQL NPM Package](https://www.npmjs.com/package/mysql)

### Best Practices

#### `SELECT *` Usage

Throughout this and future units we commonly use `SELECT *` in our SQL queries. This is primarily for readability, debugging, and ease of comprehension purposes. However, it is **NOT** considered best practice to do so in production code.

Specifically, in production code it is typically best practice to only select the columns you need in the result. For example, instead of

```sql
SELECT * FROM characters;
```

you would write:

```sql
SELECT id, name, power FROM characters;
```

This would select the `id`, `name`, and `power` columns specifically, instead of all columns (`*`).

In short, in your homeworks, projects, and production code you should select only the columns you need.

For more information on why `SELECT *` is generally considered bad practice (and for tips on when it does make sense to use it), see [https://stackoverflow.com/a/3639964/1759514](https://stackoverflow.com/a/3639964/1759514).

### Additional Course Resources

* [Curriculum Resources](https://github.com/coding-boot-camp/curriculum-resources)
