---
layout: ../../layouts/CheatSheet.astro
title: "Spring Boot Cheatsheet"
---

## What is Spring Boot
Spring Framework is a popular, open source, enterprise-level framework for creating standalone, production-grade applications that run on the Java Virtual Machine (JVM).
Spring Boot helps you to create stand-alone, production-grade Spring-based applications that you can run. We take an opinionated view of the Spring platform and third-party libraries, so that you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.
You can use Spring Boot to create Java applications that can be started by using java -jar or more traditional war deployments. We also provide a command line tool that runs “spring scripts”.

Java Spring Boot (Spring Boot) is a tool that makes developing web application and microservices with Spring Framework faster and easier through three core capabilities:

1. Autoconfiguration
2. An opinionated approach to configuration
3. The ability to create standalone applications

## Why Spring Boot
Spring’s focus on speed, simplicity, and productivity has made it the world's most popular Java framework.
Spring Boot is basically an extension of the Spring framework, which eliminates the boilerplate configurations required for setting up a Spring application.
Here are just a few of the features in Spring Boot:

 - Opinionated ‘starter' dependencies to simplify the build and application configuration.
 - Embedded server to avoid complexity in application deployment. 
 - Metrics, Health check, and externalized configuration.
 - Automatic config for Spring functionality – whenever possible

## What are Spring Boot Annotations
Spring Annotations are a form of metadata that provides data about a program. Annotations are used to provide supplemental information about a program.
It does not change the action of the compiled program.
Below is the list of most commonly used spring boot annotations

## Commonly used spring boot annotations

### Important Spring Boot Annotations

| Annotation                 | Description                                                                                                                                                                                        |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@SpringBootApplication`   | This annotation is used with main class of Spring Boot Application                                                                                                                                 |
| `@EnableAutoConfiguration` | It makes Spring guess the configuration based on the JAR files available on the classpath. It can figure out what libraries you use and preconfigure their components without you lifting a finger |
| `@Configuration`           | It is used to mark a class as a source of the bean definitions. It's a great way to decouple the actual business logic code from wiring the app together.                                          |
| `@ComponentScan`           | It is use to make sure that Spring knows about your configuration classes and can initialize the beans correctly.                                                                                  |
| `@Import`                  | If you need even more precise control of the configuration classes, you can always use `@Import` to load additional configuration.                                                                 |
| `@Component`               | Another way to declare a bean is to mark a class with a `@Component` annotation. Doing this turns the class into a Spring bean at the auto-scan time.                                              |
| `@Service`                 | Components in Service Layer need to be annotated with `@Service`                                                                                                                                   |
| `@Autowired`               | It indicates that Bean needs to be automatically created by Spring Container.                                                                                                                      |
| `@Bean`                    | A method-level annotation to specify a returned bean to be managed by Spring context.                                                                                                              |
| `@Primary`                 | It gives higher preference to a bean when there are multiple beans of the same type.                                                                                                               |
| `@Required`                | Shows that the setter method must be configured to be dependency-injected with a value at configuration time.                                                                                      |

### REST API related Annotations

| Annotation                                                      | Description                                                                                                                                                |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@Controller`                                                   | Marks the class as a web controller, capable of handling the HTTP requests.                                                                                |
| `@ResponseBody `                                                | The `@ResponseBody` is a utility annotation that makes Spring bind a method's return value to the HTTP response body.                                      |
| `@RestController `                                              | a convenience syntax for `@Controller` and `@ResponseBody` together. This means that all the action methods in the marked class will return the JSON response. |
| `@RequestMapping(method = RequestMethod.GET, value = "/path") ` | Specifies a method in the controller that should be responsible for serving the HTTP request to the given path                                             |
| `@PathVariable `                                                | It automatically retrieves a Path variable into the method parameter of REST end point.                                                                    |
| `@RequestParam `                                                | It automatically retrieves a Query parameter into the method parameter of REST end point.                                                                  |

### Spring Boot Data JPA related annotations

| Annotation        | Description                                                                                                                    |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `@Entity`         | Class which need to be mapped with underlying DB Table                                                                         |
| `@Table `         | Used along with `@Entity` annotated, to specify custom name for DB Table(by default DB Table has same name as Entity Class name) |
| `@Column `        | Used with Data members of Entity class, to indicate a Column of DB Table.                                                      |
| `@NotNull `       | Specifies the field in the table to be not null                                                                                |
| `@Id `            | It marks a field in a model class as the primary key                                                                           |
| `@Param `         | We can pass named parameters to our queries using                                                                              |
| `@Transactional ` | When we want to configure the transactional behavior of a method, we can do it with this annotation                            |
