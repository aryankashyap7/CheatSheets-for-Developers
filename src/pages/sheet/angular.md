---
layout: ../../layouts/CheatSheet.astro
title: "Angular Cheatsheet"
---

## Synopsis

Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.

## Angular Binding:

| Syntax                                                                          | Description                                                  |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `<p>{{expression}}</p>`                                                         | Interpolation                                                |
| `<p [property]="expression"></p>`                                               | Property binding                                             |
| `<p>title</p>`                                                                  | One-way binding [No changes were reflected in the component] |
| `<input [(ngModel)]="expression">`                                              | Two-way binding                                              |
| `<p bind-property="expression"></p>`                                            | Property binding                                             |
| `<p on-event="statement"></p>`                                                  | Event binding                                                |
| `<button [attr.a­ri­a-l­abe­l]=­"­ok">­Ok<­/bu­tto­n>`                          | Attribute binding                                            |
| `<p bind-innerHTML="htmlExp"></p>`                                              | HTML binding                                                 |
| `<p [style.color]="colorExp">...</p>`                                           | Style binding                                                |
| `<p [class.special]="isSpecial">...</p>`                                        | Class binding                                                |
| `<p [ngClass]="{class­-­1:­co­nd­it­ion­1, class­-­2:­co­nd­it­ion­2}">...</p>` | Class binding with ngClass                                   |
| `<student-details [student]="currStudent"></student-details>`                   | Component binding                                            |
| `<div [ngClass] = "­{se­lected: isSele­cte­d}">­Student<­/di­v>`                | Directive Binding                                            |
| `<div [ngSwitch]="switchExpression">`                                           | Structural Directive                                         |
| `<input [value]="student.name" (input)="student.name=$event.target.value">`     | $event                                                       |

## Angular Lifecycle Hooks:

| Lifecycle Hook          | Description                                                               |
| ----------------------- | ------------------------------------------------------------------------- |
| ngOnInit()              | It get invoked when angular initialize component or directive.            |
| ngOnChanges()           | It get invoked when angular sets data bound input property i.e. @Input(). |
| ngDoCheck()             | It get invoked for every changes.                                         |
| ngAfterContentInit()    | It get invoked after angular project content in its view.                 |
| ngAfterContentChecked() | It get invoked after angular checks the binding of content into view.     |
| ngAfterViewInit()       | It get invoked after angular create component view.                       |
| ngAfterViewChecked()    | It get invoked after angular checks the binding of component view.        |
| ngOnDestroy()           | It get invoked before angular destroy component or directives.            |

## Angular CLI commands:

| Command                         | Description                              |
| ------------------------------- | ---------------------------------------- |
| ng new project-name             | To create a new project                  |
| ng g component <name>           | To generate a component                  |
| ng g directive <name>           | To generate directive                    |
| ng g pipe <name>                | To generate pipe                         |
| ng g service <name>             | To generate service                      |
| ng g class <name>               | To generate class                        |
| ng g interface <name>           | To generate interface                    |
| ng serve                        | To run application in local server       |
| ng build [--e=<name>]           | To create a build and change environment |
| ng test                         | To test your application                 |
| ng e2e                          | To test your application                 |
| ng generate universal [options] | To generate universal command            |
| ng g universal [options]        | To generate universal command            |
| ng add                          | Adds support for an external library     |
| ng update                       | Updates workspace and its dependencies   |
| ng version                      | Outputs Angular CLI version              |
