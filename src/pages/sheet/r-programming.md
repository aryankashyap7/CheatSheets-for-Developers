---
layout: ../../layouts/CheatSheet.astro
title: "R Language Cheatsheet"
---

## Synopsis

R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing. The R language is widely used among statisticians and data miners for developing statistical software and data analysis.

## Vector

### Creating Vectors

| Initialization    | Vector          | Definition                  |
| ----------------- | --------------- | --------------------------- |
| c(2,4,6)          | **2 4 6**       | Join elements into a vector |
| 2:6               | **2 3 4 5 6**   | An Integer Sequence         |
| seq(2, 3, by=0.5) | **2.0 2.5 3.0** | A complex sequence          |
| rep(1:2, times=3) | **1 2 1 2 1 2** | Repeat a vector             |
| rep(1:2, each=3)  | **1 1 1 2 2 2** | Repeat elements of a Vector |

### Vector Functions

    sort(x)
    #Returns x sorted.

    rev(x)
    #Returns x reverse.

    table(x)
    #See count of values.

    unique(x)
    #See unique Values.

### Selecting Vector Elements

#### By Position

| Example   | Definition                       |
| --------- | -------------------------------- |
| x[4]      | The fourth element.              |
| x[-4]     | All but the fourth.              |
| x[2:4]    | Elements two to four.            |
| x[-(2:4)] | All elements except two to four. |
| x[c(1:5)] | Elements one and five.           |

#### By Value

| Example              | Definition                      |
| -------------------- | ------------------------------- |
| x[x == 10]           | Elements which are equal to 10. |
| x[x < 0]             | All elements less than zero.    |
| x[x %in% c(1, 2, 5)] | Elements in the set 1, 2, 5.    |

#### Named Vectors

| Example    | Definition                 |
| ---------- | -------------------------- |
| x[‘apple’] | Element with name ‘apple’. |

#### [Back To Top🔼](#table-of-contents)

## Getting Help

### Accessing the help files

    ?mean
    #Get help of a particular function.

    help.search(‘weighted mean’)
    #Search the help files for a word or phrase.

    help(package = ‘dplyr’)
    #Find help for a package.

### More about an object

    str(iris)
    #Get a summary of an object’s structure.

    class(iris)
    #Find the class an object belongs to.

#### [Back To Top🔼](#table-of-contents)

## Working Directory

    getwd()
    #Find the current working directory (where inputs are found and outputs are sent).

    setwd(‘C://file/path’)
    #Change the current working directory

> Use projects in RStudio to set the working directory to the folder you are working in.

#### [Back To Top🔼](#table-of-contents)

## Using Libraries

    install.packages(‘dplyr’)
    #Download and install a package from CRAN.

    library(dplyr)
    #Load the package into the session, making all its functions available to use.

    dplyr::select
    #Use a particular function from a package. data(iris) Load a built-in dataset into the environment

#### [Back To Top🔼](#table-of-contents)

## Programming

### For Loop

    for (variable in sequence)
    {
     Do something
    }

    #Example:
    for (i in 1:4)
    {
     j <- i + 10
     print(j)
    }

### While Loop

    while (condition)
    {
     Do something
    }

    #Example:
    while (i < 5)
    {
     print(i)
     i <- i + 1
    }

### If statements

    if (condition)
    {
    Do something
    }
    else
    {
    Do something different
    }

    #Example:
    if (i > 3)
    {
    print(‘Yes’)
    }
    else
    {
    print(‘No’)
    }

### Functions

    function_name <- function(var)
    {
    Do something
    return(new_variable)
    }

    #Example:
    square <- function(x)
    {
    squared <- x*x
    return(squared)
    }

#### [Back To Top🔼](#table-of-contents)

## Conditions

| Condition    | Definition               |
| ------------ | ------------------------ |
| `a == b`     | Are equal                |
| `a != b`     | Not equal                |
| `a > b`      | Greater than             |
| `a < b`      | Less than                |
| `a >= b`     | Greater than or equal to |
| `a <= b`     | Less than or equal to    |
| `is.na(a)`   | Is missing               |
| `is.null(a)` | Is null                  |

#### [Back To Top🔼](#table-of-contents)

## Reading and Writing Data

| Input                          | Output                          | Description                                                                                     |
| ------------------------------ | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| `df <- read.table(‘file.txt’)` | `write.table(df, ‘file.txt’)`   | Read and write a delimited text file.                                                           |
| `df <- read.csv(‘file.csv’)`   | `write.csv(df, ‘file.csv’)`     | Read and write a comma separated value file. This is a special case of read.table/ write.table. |
| `load(‘file.RData’)`           | `save(df, file = ’file.Rdata’)` | Read and write an R data file, a file type special for R.                                       |

#### [Back To Top🔼](#table-of-contents)

## Data Type Conversions

> Converting between common data types in R. Can always go from a higher value in the table to a lower value.

| Data Type    | Variables                       | Definition                                                                |
| ------------ | ------------------------------- | ------------------------------------------------------------------------- |
| as.logical   | TRUE, FALSE, FALSE              | Boolean values (TRUE or FALSE).                                           |
| as.numeric   | 1, 0, 0                         | Integers or floating point numbers.                                       |
| as.character | '1', '0', '0'                   | Character strings. Generally preferred to factors.                        |
| as.factor    | '1', '0', '1', levels: '1', '0' | Character strings with preset levels. Needed for some statistical models. |

#### [Back To Top🔼](#table-of-contents)

## Matrixes

### Selecting Segments from a Matrix

    m <- matrix(x, nrow = 3, ncol = 3)
    #Create a matrix from x.

---

m[2, ] - Select a row
| | | |
|--|--|--|
| **O** |**O** | **O** |
| | | |

---

m[ ,1] - Select a row
| **O** | | |
|--|--|--|
| **O** | | |
| **O** | | |

---

m[2,3] - Select an element
|| | |
|-----|--|--|
|| |**O** |
|| | |

---

### Matrix Functions

    t(m)
    #Transpose

    m %*% n
    #Matrix Multiplication

    solve(m, n)
    #Find x in: m * x = n

#### [Back To Top🔼](#table-of-contents)

## Strings

    paste(x, y, sep = ' ')
    #Join multiple vectors together.

    paste(x, collapse = ' ')
    #Join elements of a vector together.

    grep(pattern, x)
    #Find regular expression matches in x.

    gsub(pattern, replace, x)
    #Replace matches in x with a string.

    toupper(x)
    #Convert to uppercase.

    tolower(x)
    #Convert to lowercase.

    nchar(x)
    #Number of characters in a string

> Also see the stringr library

#### [Back To Top🔼](#table-of-contents)

## Factors

    factor(x)
    #Turn a vector into a factor. Can set the levels of the factor and the order.

    cut(x, breaks = 4)
    #Turn a numeric vector into a factor but ‘cutting’ into sections.

#### [Back To Top🔼](#table-of-contents)

## Math Functions

    log(x) 			- 	Natural log.
    sum(x) 			- 	Sum.
    exp(x) 			- 	Exponential.
    mean(x) 		- 	Mean.
    max(x) 			- 	Largest element.
    median(x) 		-	Median.
    min(x) 			- 	Smallest element.
    quantile(x) 	- 	Percentage quantiles.
    round(x, n) 	- 	Round to n decimal places.
    rank(x) 		- 	Rank of elements.
    signif(x, n) 	-	Round to n significant figures.
    var(x) 			-	The variance.
    cor(x, y) 		- 	Correlation.
    sd(x) 			- 	The standard deviation.

#### [Back To Top🔼](#table-of-contents)

## Lists

    l <- list(x = 1:5, y = c('a', 'b'))
    #A list is collection of elements which can be of different types.

---

    l[[2]]
    #Second element of l.

    l[1]
    #New list with only the first element.

    l$x
    #Element named x.

    l['y']
    #New list with only element named y.

#### [Back To Top🔼](#table-of-contents)

## Statistics

| Model               | Definition.                                |
| ------------------- | ------------------------------------------ |
| lm(x ~ y, data=df)  | Linear model.                              |
| glm(x ~ y, data=df) | Generalised linear model.                  |
| summary( )          | Get more detailed information out a model. |

#### [Back To Top🔼](#table-of-contents)

## Variable Assignment

    > a <- 'apple'
    > a
    [1] 'apple'

### The Environment

| Function       | Definition                                 |
| -------------- | ------------------------------------------ |
| ls()           | List all variables in the environment.     |
| rm()           | Remove x from the environment.             |
| rm(list = ls() | Remove all variables from the environment. |

> You can use the environment panel in RStudio to browse variables in your environment.

#### [Back To Top🔼](#table-of-contents)

## Data Frames

    df <- data.frame(x = 1:3, y = c('a', 'b', 'c'))
    #A special case of a list where all elements are the same length.

| X   | Y   |
| --- | --- |
| 1   | a   |
| 2   | b   |
| 3   | c   |

### Understanding a data frame

    View(df)
    #See the full data frame.

    head(df)
    #See the first 6 rows.

### List subsetting

    df$x

| **O** |     |
| ----- | --- |
| **O** |     |
| **O** |     |
| **O** |     |

    df[[2]]

|     | **O** |
| --- | ----- |
|     | **O** |
|     | **O** |
|     | **O** |

### Matrix subsetting

    df[ ,2]

|     | **O** |
| --- | ----- |
|     | **O** |
|     | **O** |
|     | **O** |

    df[2, ]

|     | **O** |
| --- | ----- |
|     | **O** |
|     | **O** |
|     | **O** |

### Data Frame Functions

    nrow(df)
    #Number of rows.

    ncol(df)
    #Number of columns.

    dim(df)
    #Number of columns and rows.

> Also see the dplyr library.

#### [Back To Top🔼](#table-of-contents)

## Distributions

|              | Random Variates | Density Function | Cumulative Distribution | Quantile |
| ------------ | --------------- | ---------------- | ----------------------- | -------- |
| **Normal**   | rnorm           | dnorm            | cnorm                   | qnorm    |
| **Poison**   | rpois           | dpois            | cpois                   | qpois    |
| **Binomlal** | rbinom          | dbinom           | cbinom                  | qbinom   |
| **Uniform**  | runif           | dunif            | cunif                   | qunif    |

#### [Back To Top🔼](#table-of-contents)

## Plotting

    plot(x)
    #Values of x in order.

![enter image description here](https://i.postimg.cc/RVWZSdds/px.png)
plot(x, y)
#Values of x against y
![enter link description here](https://i.postimg.cc/7LwCZ7f5/pxy.png)
hist(x)
#Histogram of x.
![enter image description here](https://i.postimg.cc/FFyKCppw/p.png)

#### [Back To Top🔼](#table-of-contents)
