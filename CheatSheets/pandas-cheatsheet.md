## Table of Contents

- [Pandas For Data Analysis](#pandas-for-data-analysis)
 - [Synopsis](#synopsis)
 - [Tidy Data](#tidy-data)
 - [Input/Output](#inputoutput)
 - [Creating DataFrames](#creating-dataframes)
 - [Reshaping DataFrames](#reshaping-dataframes)
 - [Grouping DataFrames](#grouping-dataframes)
 - [Merging DataFrames](#merging-dataframes)
 - [Pivot Tables](#pivot-tables)
 - [Data Visualization](#data-visualization)
 - [Time Series](#time-series)
 - [Categorical Data](#categorical-data)
 - [Missing Data](#missing-data)
 - [Handling Large Data](#handling-large-data)
 - [Method Chaining](#method-chaining)
 - [Grouping and Aggregating](#grouping-and-aggregating)
 - [Pandas Gotchas](#pandas-gotchas)
 - [Make New Columns](#make-new-columns)
 - [Make New Rows](#make-new-rows)
 - [Rename Columns](#rename-columns)
 - [Exporting Data](#exporting-data)


## Pandas For Data Analysis

Pandas is a Python library for data analysis. It provides high-performance, easy-to-use data structures and data analysis tools. Pandas is built on top of NumPy, which provides efficient storage and manipulation of dense data.

### Synopsis

```python
import pandas as pd
import numpy as np
```
**[🔼Back to Top](#table-of-contents)**


### Tidy Data

Tidy data is a standard way of mapping the meaning of a dataset to its structure. A dataset is tidy when:

- Each variable forms a column.
- Each observation forms a row.
- Each type of observational unit forms a table.

**[🔼Back to Top](#table-of-contents)**


### Input/Output

```python
# Read a CSV file
df = pd.read_csv('file.csv')

# Read a CSV file with a specific separator
df = pd.read_csv('file.csv', sep=';')

# Read a excel file
df = pd.read_excel('file.xlsx')

# Read a JSON file
df = pd.read_json('file.json')

# Read a HTML file
df = pd.read_html('file.html')

# Read a SQL file
df = pd.read_sql('file.sql')

# Read a dataframes from a dictionary
df = pd.DataFrame({'col1': [1, 2], 'col2': [3, 4]})

# Read a dataframes from a list
df = pd.DataFrame([[1, 2], [3, 4]], columns=['col1', 'col2'])

# Read a dataframes from a numpy array
df = pd.DataFrame(np.array([[1, 2], [3, 4]]), columns=['col1', 'col2'])

```

**[🔼Back to Top](#table-of-contents)**


### Creating DataFrames

```python
# Create a dataframe from a dictionary
df = pd.DataFrame({'col1': [1, 2], 'col2': [3, 4]})
df
```
```
Output:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 3    |
| 1 | 2    | 4    |
```

### Reshaping Dataframes

```python
# Transpose a dataframe
df.T
```
```
Output:

|      | 0 | 1 |
|------|---|---|
| col1 | 1 | 2 |
| col2 | 3 | 4 |
```

```python
# Sort a dataframe by a column
df.sort_values(by='col1')
```
```
Output:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 3    |
| 1 | 2    | 4    |
```

```python
# Sort a dataframe by a column in descending order
df.sort_values(by='col1', ascending=False)
```
```

Output:

|   | col1 | col2 |
|---|------|------|
| 1 | 2    | 4    |
| 0 | 1    | 3    |
```

```python
# Sort a dataframe by multiple columns
df.sort_values(by=['col1', 'col2'])
```
```
Output:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 3    |
| 1 | 2    | 4    |
```

**[🔼Back to Top](#table-of-contents)**


### Grouping DataFrames

```
Assume we have a dataframe df with the following columns:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 3    |
| 1 | 2    | 4    |
| 2 | 1    | 5    |
| 3 | 2    | 6    |
| 4 | 1    | 7    |
| 5 | 2    | 8    |
```

```python
# Group a dataframe by a column
df.groupby('col1')

# Group a dataframe by a column and get the sum of the other columns
df.groupby('col1').sum()
```

```
Output:

|      | col2 |
|------|------|
| col1 |      |
| 1    | 15   |
| 2    | 18   |
```

```python
# Group a dataframe by a column and get the mean of the other columns
df.groupby('col1').mean()
```

```
Output:

|      | col2 |
|------|------|
| col1 |      |
| 1    | 5    |
| 2    | 6    |
```

**[🔼Back to Top](#table-of-contents)**

### Merging DataFrames

```
Assume we have two dataframes df1 and df2 with the following columns:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 3    |
| 1 | 2    | 4    |     df1
| 2 | 1    | 5    |
| 3 | 2    | 6    |

|   | col1 | col3 |
|---|------|------|
| 0 | 1    | 7    |
| 1 | 2    | 8    |     df2
| 2 | 1    | 9    |
| 3 | 2    | 10   |
```

```python

# Merge two dataframes on a column
pd.merge(df1, df2, on='col1')
```

```
Output:

|   | col1 | col2 | col3 |
|---|------|------|------|
| 0 | 1    | 3    | 7    |
| 1 | 1    | 3    | 9    |
| 2 | 1    | 5    | 7    |
| 3 | 1    | 5    | 9    |
```

```python
# Merge two dataframes on multiple columns
pd.merge(df1, df2, on=['col1', 'col2'])
```

```
Output:

|   | col1 | col2 | col3 |
|---|------|------|------|
| 0 | 1    | 3    | 7    |
| 1 | 1    | 5    | 7    |
```

```
#Concatenate two dataframes by rows
pd.concat([df1, df2], axis=0)

```

```
Output:

|   | col1 | col2 | col3 |
|---|------|------|------|
| 0 | 1    | 3    |      |
| 1 | 2    | 4    |      |
| 2 | 1    | 5    |      |
| 3 | 2    | 6    |      |
| 0 | 1    |      | 7    |
| 1 | 2    |      | 8    |
| 2 | 1    |      | 9    |
| 3 | 2    |      | 10   |
```


**[🔼Back to Top](#table-of-contents)**



### Pivot Tables

Pivot tables are a powerful tool for summarizing data. They allow you to group and aggregate data in different ways.


```
Assume we have a dataframe df with the following columns:

|   | col1 | col2 | col3 |
|---|------|------|------|
| 0 | 1    | 3    | 7    |
| 1 | 1    | 3    | 9    |
| 2 | 1    | 5    | 7    |
| 3 | 1    | 5    | 9    |
```

```python
# Create a pivot table
df.pivot_table(index='col1', columns='col2', values='col3')
```

```
Output:

| col2 | 3 | 5 |
|------|---|---|
| col1 |   |   |
| 1    | 8 | 8 |
```

```python
# Create a pivot table with multiple aggregations
df.pivot_table(index='col1', columns='col2', values='col3', aggfunc=[np.mean, np.sum])
```

```
Output:

| col2 | 3       | 5       |
|------|---------|---------|
| col1 |         |         |
| 1    | mean sum | mean sum |
|      | 8       | 8       |
```

**[🔼Back to Top](#table-of-contents)**

### Data Visualization

```python
# Import matplotlib
import matplotlib.pyplot as plt

# Create a line plot
df.plot.line()


# Create a bar plot
df.plot.bar()


# Create a histogram
df.plot.hist()


# Create a box plot
df.plot.box()
```

**[🔼Back to Top](#table-of-contents)**

### Time Series

Time series data is a special type of data that is indexed by time. Pandas has a lot of built-in functionality for working with time series data.

```python
# Import datetime
from datetime import datetime

# Create a datetime object
datetime(year=2018, month=1, day=1)

# Create a datetime index
dates = pd.date_range('2018-01-01', periods=365, freq='D')

# Create a dataframe with a datetime index
df = pd.DataFrame({'col1': np.random.randn(len(dates))}, index=dates)

# Select a range of dates
df['2018-01-01':'2018-01-10']

# Select a single date
df['2018-01-01']
```

**[🔼Back to Top](#table-of-contents)**

### Categorical Data

Categorical data is a special type of data that takes on a limited number of possible values. Pandas has a special data type for working with categorical data.

```python
# Create a categorical variable
df['col1'] = df['col1'].astype('category')

# Create dummy variables
pd.get_dummies(df['col1'], prefix='col1')
```

**[🔼Back to Top](#table-of-contents)**

### Missing Data

```python
# Create a dataframe with missing values
df = pd.DataFrame({'col1': [1, 2, np.nan], 'col2': [np.nan, 3, 4]})
```

```python
# Drop rows with missing values
df.dropna()
```

```
Output:

|   | col1 | col2 |
|---|------|------|
| 1 | 2    | 3    |
```

```python
# Drop columns with missing values
df.dropna(axis=1)
```

```
Output:

|   | col1 |
|---|------|
| 0 | 1    |
| 1 | 2    |
| 2 |      |
```

```python
# Fill missing values with 0
df.fillna(0)
```

```
Output:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 0    |
| 1 | 2    | 3    |
| 2 |      | 4    |
```

```python
# Fill missing values in col1 with 0 and col2 with 1
df['col1'].fillna(0)
df['col2'].fillna(1)
```

```
Output:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 1    |
| 1 | 2    | 3    |
| 2 | 0    | 4    |
```

```python
# Fill missing values with the previous value
df.fillna(method='ffill')
```

```
Output:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    |      |
| 1 | 2    | 3    |
| 2 | 2    | 4    |
```

```python
# Fill missing values with the next value
df.fillna(method='bfill')
```

```
Output:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 3    |
| 1 | 2    | 3    |
| 2 |      | 4    |
```

```python
# Fill missing values with the mean of the column
df.fillna(df.mean())
```

```
Output:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 3.5  |
| 1 | 2    | 3    |
| 2 | 1.5  | 4    |
```

```python
# Find the number of missing values in each column
df.isnull().sum()
```

```
Output:

| col1 | 1 |
| col2 | 1 |
```


**[🔼Back to Top](#table-of-contents)**


### Handling Large Datasets

```python
# Create a dataframe with 1000 rows and 100 columns
df = pd.DataFrame(np.random.randn(1000, 100))

# Select the first 10 rows
df.head(10)

# Select the last 10 rows
df.tail(10)

# Select the first 10 rows of the first 5 columns
df.iloc[:10, :5]

# Select values greater than 7 in col1
df[df['col1'] > 7]

# Select values greater than 7 in col1 and less than 5 in col2
df[(df['col1'] > 7) & (df['col2'] < 5)]

# Select values in col1 that are not in col2
df[~df['col1'].isin(df['col2'])]

```

**[🔼Back to Top](#table-of-contents)**

### Method Chaining
Method chaining is a way to write code in a more concise way. It allows you to string together multiple methods in a single line of code.

```python
# Create a dataframe
df = pd.DataFrame({'col1': [1, 2, 3], 'col2': [4, 5, 6]})
```

```python
# Select the first 2 rows of col1 and replace missing values with 0
df['col1'].head(2).fillna(0)
```

```
Output:

| 0 | 1 |
|---|---|
| 1 | 2 |
```
**[🔼Back to Top](#table-of-contents)**

### Grouping and Aggregating

Grouping and aggregating data is a common task in data analysis. Pandas makes it easy to group and aggregate data.

```python

# Create a dataframe
df = pd.DataFrame({'col1': ['A', 'A', 'B', 'B'], 'col2': [1, 2, 3, 4], 'col3': [100, 200, 300, 400]})
```

```python
# Group by col1 and find the mean of each group
df.groupby('col1').mean()
```

```
Output:

| col1 | col2 | col3 |
|------|------|------|
| A    | 1.5  | 150  |
| B    | 3.5  | 350  |
```

```python
# Group by col1 and find the sum of each group
df.groupby('col1').sum()
```

```
Output:

| col1 | col2 | col3 |
|------|------|------|
| A    | 3    | 300  |
| B    | 7    | 700  |
```

```python
# Group by col1 and find the max of each group
df.groupby('col1').max()
```

```
Output:

| col1 | col2 | col3 |
|------|------|------|
| A    | 2    | 200  |
| B    | 4    | 400  |
```

**[🔼Back to Top](#table-of-contents)**

### Pandas Gotchas

Pandas Gotchas are common mistakes that new users make when using Pandas. Here are some common gotchas to avoid.

```python
# Create a dataframe
df = pd.DataFrame({'col1': [1, 2, 3], 'col2': [4, 5, 6]})
```

```python
# Select the first row of col1
df['col1'][0]
```

```
Output:

1
```

```python
# Select the first row of col1
df.loc[0, 'col1']
```

```
Output:

1
```

```python
# Select the first row of col1

df.iloc[0, 0]
```

```
Output:

1
```

**[🔼Back to Top](#table-of-contents)**

### Make New Columns

```python
# Create a dataframe
df = pd.DataFrame({'col1': [1, 2, 3], 'col2': [4, 5, 6]})
```

```python
# Create a new column as a function of existing columns
df['col3'] = df['col1'] + df['col2']
```

```
Output:

|   | col1 | col2 | col3 |
|---|------|------|------|
| 0 | 1    | 4    | 5    |
| 1 | 2    | 5    | 7    |
| 2 | 3    | 6    | 9    |
```

```python
# Create a new column based on a conditional statement
df['col4'] = np.where(df['col1'] > 2, 'high', 'low')
```

```
Output:

|   | col1 | col2 | col3 | col4 |
|---|------|------|------|------|
| 0 | 1    | 4    | 5    | low  |
| 1 | 2    | 5    | 7    | low  |
| 2 | 3    | 6    | 9    | high |
```

**[🔼Back to Top](#table-of-contents)**

## Make New Rows

```python
# Create a dataframe
df = pd.DataFrame({'col1': [1, 2, 3], 'col2': [4, 5, 6]})
```

```python
# Create a new row
df.loc[3] = [7, 8]
```

```
Output:

|   | col1 | col2 |
|---|------|------|
| 0 | 1    | 4    |
| 1 | 2    | 5    |
| 2 | 3    | 6    |
| 3 | 7    | 8    |
```

**[🔼Back to Top](#table-of-contents)**

### Rename Columns

```python
# Create a dataframe
df = pd.DataFrame({'col1': [1, 2, 3], 'col2': [4, 5, 6]})
```

```python
# Rename columns
df.rename(columns={'col1': 'column1', 'col2': 'column2'}, inplace=True)
```

```
Output:

|   | column1 | column2 |
|---|---------|---------|
| 0 | 1       | 4       |
| 1 | 2       | 5       |
| 2 | 3       | 6       |
```

**[🔼Back to Top](#table-of-contents)**


### Exporting Data

```python
# Create a dataframe
df = pd.DataFrame({'col1': [1, 2, 3], 'col2': [4, 5, 6]})
```

```python
# Export to csv
df.to_csv('data.csv', index=False)
```

```python
# Export to excel
df.to_excel('data.xlsx', index=False)
```

```python
# Export to json
df.to_json('data.json', orient='records')
```
```python
# Export to pickle
df.to_pickle('data.pkl')
```

```python
# Export to dictionary
df.to_dict('records')
```

```python
# Export to clipboard
df.to_clipboard()
```

**[🔼Back to Top](#table-of-contents)**
