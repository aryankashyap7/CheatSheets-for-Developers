# MySQL Cheat Sheet

## Table of Contents

- [MySQL Cheat Sheet](#mysql-cheat-sheet)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Basic Commands](#basic-commands)
  - [Database](#database)
  - [Table](#table)
  - [Data](#data)
  - [User](#user)
  - [Backup](#backup)
  - [References](#references)

## Installation

```bash
# Install
sudo apt install mysql-server

# Start
sudo systemctl start mysql

# Stop
sudo systemctl stop mysql

# Restart
sudo systemctl restart mysql

# Status
sudo systemctl status mysql
```

**[🔼Back to Top](#table-of-contents)**

## Basic Commands

```bash
# Login
mysql -u root -p

# Show databases
show databases;

# Use database
use database_name;

# Show tables
show tables;

# Show table structure
describe table_name;

# Show table data
select * from table_name;

# Exit
exit;
```

**[🔼Back to Top](#table-of-contents)**

## Database

```bash
# Create database
create database database_name;

# Drop database
drop database database_name;
```

**[🔼Back to Top](#table-of-contents)**

## Table

```bash
# Create table
create table table_name (
    column_name1 data_type,
    column_name2 data_type,
    column_name3 data_type,
    ...
);

# Drop table
drop table table_name;

# Alter table
alter table table_name add column_name data_type;
alter table table_name drop column_name;
alter table table_name modify column_name data_type;
```

**[🔼Back to Top](#table-of-contents)**

## Data

```bash
# Insert data
insert into table_name (column_name1, column_name2, column_name3, ...) values (value1, value2, value3, ...);

# Update data
update table_name set column_name1 = value1, column_name2 = value2, column_name3 = value3, ... where condition;

# Delete data
delete from table_name where condition;
```

**[🔼Back to Top](#table-of-contents)**

## User

```bash
# Create user
create user 'username'@'localhost' identified by 'password';

# Grant privileges
grant all privileges on database_name.* to 'username'@'localhost';

# Flush privileges
flush privileges;
```

**[🔼Back to Top](#table-of-contents)**

## Backup

```bash
# Backup
mysqldump -u root -p database_name > database_name.sql

# Restore
mysql -u root -p database_name < database_name.sql
```

**[🔼Back to Top](#table-of-contents)**

## References

- [MySQL](https://www.mysql.com/)
- [MySQL Tutorial](https://www.mysqltutorial.org/)
- [MySQL Cheat Sheet](https://devhints.io/mysql)
- [MySQL 8.0 Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/)
- [MySQL 8.0 Command-Line Options](https://dev.mysql.com/doc/refman/8.0/en/server-options.html)
- [MySQL 8.0 System Variables](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)
- [MySQL 8.0 Error Messages](https://dev.mysql.com/doc/refman/8.0/en/error-messages-server.html)
- [MySQL 8.0 SQL Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html)
- [MySQL 8.0 SQL Syntax](https://dev.mysql.com/doc/refman/8.0/en/sql-syntax.html)
- [MySQL 8.0 SQL Functions](https://dev.mysql.com/doc/refman/8.0/en/sql-functions.html)
- [MySQL 8.0 SQL Keywords and Reserved Words](https://dev.mysql.com/doc/refman/8.0/en/keywords.html)
- [MySQL 8.0 SQL Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html)

**[🔼Back to Top](#table-of-contents)**
