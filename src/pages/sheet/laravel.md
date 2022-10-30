---
layout: ../../layouts/CheatSheet.astro
title: "Laravel8 Cheatsheet"
---

## Synopsis

Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things. Laravel is accessible, yet powerful, providing tools needed for large, robust applications.

## CLI Commands

### Project Commands

| Syntax                      | Description     |
| --------------------------- | --------------- |
| `$ laravel new projectName` | New Project     |
| `$ php artisan serve`       | Launch server   |
| `$ php artisan list`        | Commands list   |
| `$ php artisan tinker`      | Laravel Console |
| `$ php artisan route:list`  | Route List      |

### Common Commands

| Syntax                                                     | Description                                                                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `$ php artisan migrate`                                    | Database migration                                                                                                  |
| `$ php artisan db:seed`                                    | Data seed                                                                                                           |
| `$ php artisan make:migration create_products_table`       | Create table migration                                                                                              |
| `$ php artisan make:model Product -mcf`                    | Create from model with options: -m (migration), -c (controller), -r (resource controllers), -f (factory), -s (seed) |
| `$ php artisan make:controller ProductsController`         | Create a controller                                                                                                 |
| `$ php artisan make:migration add_date_to_blogposts_table` | Update table migration                                                                                              |
| `$php artisan migrate:rollback`                            | Rollback latest migration                                                                                           |
| `$ php artisan migrate:reset`                              | Rollback all migrations                                                                                             |
| `$ php artisan migrate:refresh`                            | Rollback all and re-migrate                                                                                         |
| `$php artisan migrate:refresh --seed`                      | Rollback all, re-migrate and seed                                                                                   |

## Authentication

| Syntax                                                              | Description                                                |
| ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `Auth::check();`                                                    | Determine if the current user is authenticated             |
| `Auth::user();`                                                     | Get the currently authenticated user                       |
| `Auth::id();`                                                       | Get the ID of the currently authenticated user             |
| `Auth::attempt(array('email' => $email, 'password' => $password));` | Attempt to authenticate a user using the given credentials |
| `Auth::attempt($credentials, true);`                                | 'Remember me' by passing true to Auth::attempt()           |
| `Auth::once($credentials);`                                         | Log in for a single request                                |
| `Auth::login(User::find(1));`                                       | Log a user into the application                            |
| `Auth::loginUsingId(1);`                                            | Log the given user ID into the application                 |
| `Auth::logout();`                                                   | Log the user out of the application                        |
| `Auth::validate($credentials);`                                     | Validate a user's credentials                              |
| `Auth::basic('username');`                                          | Attempt to authenticate using HTTP Basic Auth              |
| `Auth::onceBasic();`                                                | Perform a stateless HTTP Basic login attempt               |
| `Password::remind($credentials, function($message, $user){});`      | Send a password reminder to a user                         |
