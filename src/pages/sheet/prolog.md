---
layout: ../../layouts/CheatSheet.astro
title: "Prolog Cheatsheet"
---

## Synopsis

Prolog is a declarative logic programming language associated with artificial intelligence and computational linguistics. Its purpose is to represent knowledge and reason about it. 

Prolog was one of the world's first languages to support logic programming and has been used for theorem proving, knowledge representation, and automated reasoning. It is also used in linguistics, particularly in computational linguistics and natural language processing.

## Basic Commands
A Prolog program consists of facts and rules, stored in a knowledge base. You can query the program by asking questions about the facts and rules. The answers are either true or false. 

All prolog queries must end with a period.

### Printing text
```prolog
% Query
write('Hello World!').
```

### Comments
```prolog
% This is a single-line comment
/* This is a 
multi-line comment */
```

## Facts
Facts are statements that are always true. They are used to represent data.

```prolog
% Knowledge base
% Facts
likes(john, mary).
likes(mary, john).
likes(john, wine).
likes(mary, wine).
likes(john, cheese).
likes(mary, cheese).

% Query
likes(john, mary). % returns true
likes(john, john). % returns false
```

## Rules
Rules are used to represent relationships between facts. They are used to infer new facts from existing ones.

```prolog
% Knowledge base
% Facts
likes(john, mary).
likes(mary, john).
likes(john, wine).
likes(mary, wine).
likes(john, cheese).
likes(mary, cheese).

% Rule
loves(X, Y) :- likes(X, Y), likes(Y, X).

% Query
loves(john, mary). % returns true
loves(mary, john). % returns true
loves(john, wine). % returns false because john does not love wine (ie; wine doesn't like john)
```

## Variables
Variables are used to store values that can change. They are used to represent data that may not be known at the time of writing the program.

```prolog
% Knowledge base
likes(john, mary).
likes(mary, john).
likes(john, wine).
likes(mary, wine).
likes(john, cheese).
likes(mary, cheese).

% Query
likes(john, X). % returns mary, wine, cheese since john likes all of them
likes(X, Y). % returns all possible combinations of likes
likes(X, cheese). % returns john and mary
```

## Built-in Predicates
Prolog has many built-in predicates for performing operations on data. 

### Member
The member predicate checks if an element is a member of a list. It returns true if the element is a member of the list and false otherwise.

```prolog
% Knowledge base
likes(john, mary).
likes(mary, john).
likes(john, wine).
likes(mary, wine).
likes(john, cheese).
likes(mary, cheese).

% Query
member(wine, [john, mary, wine, cheese]). % returns true
member(water, [john, mary, wine, cheese]). % returns false because water is not a member of the list
```

### Length
The length predicate returns the length of a list.

```prolog
% Knowledge base
likes(john, mary).
likes(mary, john).
likes(john, wine).
likes(mary, wine).
likes(john, cheese).
likes(mary, cheese).

% Query
length([john, mary, wine, cheese], X). % returns 4
```

### Creating a loop
```prolog
% Knowledge base
:- initialization(main).
main :- loop(10).

loop(0).
loop(N) :- N>0, write('hello') , nl, N1 = N - 1, loop(N1). % prints hello 10 times

% Query
run.
```
