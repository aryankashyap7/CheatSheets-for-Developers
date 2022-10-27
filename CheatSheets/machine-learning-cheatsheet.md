# Machine Learning Cheatsheet

## Table of Contents

- [Machine Learning Cheatsheet](#machine-learning-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Supervised Learning](#supervised-learning)
    - [Linear Regression](#linear-regression)
    - [Logistic Regression](#logistic-regression)
    - [Support Vector Machine](#support-vector-machine)
    - [Decision Tree](#decision-tree)
    - [Random Forest](#random-forest)
    - [Neural Network](#neural-network)
  - [Unsupervised Learning](#unsupervised-learning)
    - [K-Means Clustering](#k-means-clustering)
    - [Hierarchical Clustering](#hierarchical-clustering)
    - [Principal Component Analysis](#principal-component-analysis)
    - [Independent Component Analysis](#independent-component-analysis)
    - [Latent Dirichlet Allocation](#latent-dirichlet-allocation)
  - [Reinforcement Learning](#reinforcement-learning)
    - [Q-Learning](#q-learning)
    - [Upper Confidence Bound](#upper-confidence-bound)
    - [Thompson Sampling](#thompson-sampling)
  - [Other Concepts](#other-concepts)
    - [Gradient Descent](#gradient-descent)
    - [Bias-Variance Tradeoff](#bias-variance-tradeoff)
    - [Regularization](#regularization)
    - [Overfitting](#overfitting)
    - [Underfitting](#underfitting)
    - [Cross Validation](#cross-validation)
    - [Hyperparameter Tuning](#hyperparameter-tuning)
    - [Feature Scaling](#feature-scaling)

## Introduction

Machine learning is a subfield of computer science that evolved from the study of pattern recognition and computational learning theory in artificial intelligence.

Machine learning explores the study and construction of algorithms that can learn from and make predictions on data. Such algorithms operate by building a model from example inputs in order to make data-driven predictions or decisions, rather than following strictly static program instructions.

<!-- Make a digram using box to show the relation between AI, Ml and DL. -->

```
Relation between AI -> ML -> DL
__________________
| AI             |
|    ___________ |
|   | ML        ||
|   |    ______ ||
|   |   | DL   |||
|   |   |______|||
|   |___________||
|________________|

```

**[🔼Back to Top](#table-of-contents)**

## Supervised Learning

Supervised learning is the machine learning task of inferring a function from labeled training data. The training data consist of a set of training examples. In supervised learning, each example is a pair consisting of an input object (typically a vector) and a desired output value (also called the supervisory signal). A supervised learning algorithm analyzes the training data and produces an inferred function, which can be used for mapping new examples. An optimal scenario will allow for the algorithm to correctly determine the class labels for unseen instances. This requires the learning algorithm to generalize from the training data to unseen situations in a "reasonable" way (see inductive bias).

Examples of supervised learning algorithms include:

Teaaching a student to recognize a cat by showing him pictures of cats and labeling them as such.

## Types of Supervised Learning

- Regression

Regression is a supervised learning task in which the model learns to predict a continuous value. For example, predicting the price of a house based on its size, age, and location.

- Classification

Classification is a supervised learning task in which the model learns to predict a discrete value. For example, predicting whether an email is spam or not spam.

**[🔼Back to Top](#table-of-contents)**

### Linear Regression

Linear regression is a linear approach to modeling the relationship between a scalar response and one or more explanatory variables (also known as dependent and independent variables). The case of one explanatory variable is called simple linear regression. For more than one explanatory variable, the process is called multiple linear regression.

```python
# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.linear_model as lm

# Import dataset
dataset = pd.read_csv('Salary_Data.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 1].values

# Split dataset into training set and test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 1/3, random_state = 0)

# Fit Simple Linear Regression to the training set
regressor = lm.LinearRegression()
regressor.fit(X_train, y_train)

# Predict the test set results
y_pred = regressor.predict(X_test)

# Visualize the training set results
plt.scatter(X_train, y_train, color = 'red')
plt.plot(X_train, regressor.predict(X_train), color = 'blue')
plt.title('Salary vs Experience (Training set)')
plt.xlabel('Years of Experience')
plt.ylabel('Salary')
plt.show()

```

**[🔼Back to Top](#table-of-contents)**

### Logistic Regression

Logistic regression is a statistical model that in its basic form uses a logistic function to model a binary dependent variable, although many more complex extensions exist. In regression analysis, logistic regression (or logit regression) is estimating the parameters of a logistic model (a form of binary regression). In this model, the logit of the probability is modeled as a linear combination of the independent variables.

```python
# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.linear_model as lm

# Import dataset
dataset = pd.read_csv('Social_Network_Ads.csv')
X = dataset.iloc[:, [2, 3]].values
y = dataset.iloc[:, 4].values

# Split dataset into training set and test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Fit Logistic Regression to the training set
classifier = lm.LogisticRegression(random_state = 0)
classifier.fit(X_train, y_train)

# Predict the test set results
y_pred = classifier.predict(X_test)

# Make the confusion matrix
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, y_pred)

# Visualize the training set results
from matplotlib.colors import ListedColormap
X_set, y_set = X_train, y_train
X1, X2 = np.meshgrid(np.arange(start = X_set[:, 0].min() - 1, stop = X_set[:, 0].max() + 1, step = 0.01),
                     np.arange(start = X_set[:, 1].min() - 1, stop = X_set[:, 1].max() + 1, step = 0.01))
plt.contourf(X1, X2, classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),

                alpha = 0.75, cmap = ListedColormap(('red', 'green')))
plt.xlim(X1.min(), X1.max())
plt.ylim(X2.min(), X2.max())

for i, j in enumerate(np.unique(y_set)):
    plt.scatter(X_set[y_set == j, 0], X_set[y_set == j, 1],
                c = ListedColormap(('red', 'green'))(i), label = j)

plt.title('Logistic Regression (Training set)')
plt.xlabel('Age')
plt.ylabel('Estimated Salary')
plt.legend()
plt.show()

```

**[🔼Back to Top](#table-of-contents)**

### Support Vector Machine (SVM)

Support vector machines (SVMs, also support vector networks) are supervised learning models with associated learning algorithms that analyze data used for classification and regression analysis. Given a set of training examples, each marked as belonging to one or the other of two categories, an SVM training algorithm builds a model that assigns new examples into one category or the other, making it a non-probabilistic binary linear classifier.

```python
# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.svm as svm

# Import dataset
dataset = pd.read_csv('Social_Network_Ads.csv')
X = dataset.iloc[:, [2, 3]].values
y = dataset.iloc[:, 4].values

# Split dataset into training set and test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Fit SVM to the training set
classifier = svm.SVC(kernel = 'linear', random_state = 0)
classifier.fit(X_train, y_train)

# Predict the test set results
y_pred = classifier.predict(X_test)

```

**[🔼Back to Top](#table-of-contents)**

### Decision Tree

Decision trees are a non-parametric supervised learning method used for classification and regression. The goal is to create a model that predicts the value of a target variable by learning simple decision rules inferred from the data features.

```python
# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.tree as tree

# Import dataset
dataset = pd.read_csv('Social_Network_Ads.csv')
X = dataset.iloc[:, [2, 3]].values
y = dataset.iloc[:, 4].values

# Split dataset into training set and test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Fit Decision Tree to the training set
classifier = tree.DecisionTreeClassifier(criterion = 'entropy', random_state = 0)
classifier.fit(X_train, y_train)

# Predict the test set results
y_pred = classifier.predict(X_test)

```

**[🔼Back to Top](#table-of-contents)**

### Random Forest

Random forests or random decision forests are an ensemble learning method for classification, regression and other tasks, that operate by constructing a multitude of decision trees at training time and outputting the class that is the mode of the classes (classification) or mean/average prediction (regression) of the individual trees.

```python

# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.ensemble as ensemble

# Import dataset
dataset = pd.read_csv('Social_Network_Ads.csv')
X = dataset.iloc[:, [2, 3]].values
y = dataset.iloc[:, 4].values

# Split dataset into training set and test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Fit Random Forest to the training set
classifier = ensemble.RandomForestClassifier(n_estimators = 10, criterion = 'entropy', random_state = 0)
classifier.fit(X_train, y_train)

# Predict the test set results
y_pred = classifier.predict(X_test)

```

**[🔼Back to Top](#table-of-contents)**

### Neural Network

Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns. They interpret sensory data through a kind of machine perception, labeling or clustering raw input. The patterns they recognize are numerical, contained in vectors, into which all real-world data, be it images, sound, text or time series, must be translated.

```python

# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.neural_network as nn

# Import dataset
dataset = pd.read_csv('Social_Network_Ads.csv')
X = dataset.iloc[:, [2, 3]].values
y = dataset.iloc[:, 4].values

# Split dataset into training set and test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Fit Neural Network to the training set
classifier = nn.MLPClassifier(hidden_layer_sizes = (10, 10, 10), max_iter = 1000)
classifier.fit(X_train, y_train)

# Predict the test set results
y_pred = classifier.predict(X_test)

```

**[🔼Back to Top](#table-of-contents)**

## Unsupervised Learning

Unsupervised learning is a type of machine learning algorithm used to draw inferences from datasets consisting of input data without labeled responses. The most common unsupervised learning method is cluster analysis, which is used for exploratory data analysis to find hidden patterns or grouping in data.

Examples of unsupervised learning algorithms include:

- Customer segmentation (clustering)
- DNA sequencing (clustering)

**[🔼Back to Top](#table-of-contents)**

### K-Means Clustering

K-means clustering is a method of vector quantization, originally from signal processing, that is popular for cluster analysis in data mining. K-means clustering aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean, serving as a prototype of the cluster.

```python

# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.cluster as cluster

# Import dataset
dataset = pd.read_csv('Mall_Customers.csv')
X = dataset.iloc[:, [3, 4]].values

# Find the optimal number of clusters using the elbow method
wcss = []
for i in range(1, 11):
    kmeans = cluster.KMeans(n_clusters = i, init = 'k-means++', random_state = 42)
    kmeans.fit(X)
    wcss.append(kmeans.inertia_)
plt.plot(range(1, 11), wcss)
plt.title('The Elbow Method')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
plt.show()

# Fit K-Means to the dataset
kmeans = cluster.KMeans(n_clusters = 5, init = 'k-means++', random_state = 42)
y_kmeans = kmeans.fit_predict(X)

# Visualize the clusters
plt.scatter(X[y_kmeans == 0, 0], X[y_kmeans == 0, 1], s = 100, c = 'red', label = 'Careful')
plt.scatter(X[y_kmeans == 1, 0], X[y_kmeans == 1, 1], s = 100, c = 'blue', label = 'Standard')
plt.scatter(X[y_kmeans == 2, 0], X[y_kmeans == 2, 1], s = 100, c = 'green', label = 'Target')
plt.scatter(X[y_kmeans == 3, 0], X[y_kmeans == 3, 1], s = 100, c = 'cyan', label = 'Careless')
plt.scatter(X[y_kmeans == 4, 0], X[y_kmeans == 4, 1], s = 100, c = 'magenta', label = 'Sensible')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s = 300, c = 'yellow', label = 'Centroids')
plt.title('Clusters of clients')
plt.xlabel('Annual Income (k$)')
plt.ylabel('Spending Score (1-100)')
plt.legend()
plt.show()

```

Note: Elbow method is a heuristic method of interpretation and validation of consistency within cluster analysis designed to help finding the appropriate number of clusters in a dataset.

**[🔼Back to Top](#table-of-contents)**

### Hierarchical Clustering

Hierarchical clustering is a method of cluster analysis which seeks to build a hierarchy of clusters. It is a way of organizing objects so that objects in the same group (called a cluster) are more similar (in some sense or another) to each other than to those in other groups (clusters).

```python

# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.cluster as cluster

# Import dataset
dataset = pd.read_csv('Mall_Customers.csv')
X = dataset.iloc[:, [3, 4]].values

# Find the optimal number of clusters using the dendrogram
dendrogram = cluster.hierarchy.dendrogram(cluster.hierarchy.linkage(X, method = 'ward'))
plt.title('Dendrogram')
plt.xlabel('Customers')
plt.ylabel('Euclidean distances')
plt.show()

# Fit Hierarchical Clustering to the dataset
hc = cluster.AgglomerativeClustering(n_clusters = 5, affinity = 'euclidean', linkage = 'ward')
y_hc = hc.fit_predict(X)

# Visualize the clusters
plt.scatter(X[y_hc == 0, 0], X[y_hc == 0, 1], s = 100, c = 'red', label = 'Careful')
plt.scatter(X[y_hc == 1, 0], X[y_hc == 1, 1], s = 100, c = 'blue', label = 'Standard')
plt.scatter(X[y_hc == 2, 0], X[y_hc == 2, 1], s = 100, c = 'green', label = 'Target')
plt.scatter(X[y_hc == 3, 0], X[y_hc == 3, 1], s = 100, c = 'cyan', label = 'Careless')
plt.scatter(X[y_hc == 4, 0], X[y_hc == 4, 1], s = 100, c = 'magenta', label = 'Sensible')
plt.title('Clusters of clients')
plt.xlabel('Annual Income (k$)')
plt.ylabel('Spending Score (1-100)')
plt.legend()
plt.show()

```

Note: Dendrogram is a diagram that shows the hierarchical relationship between objects. It is most commonly created as an output from hierarchical clustering.

**[🔼Back to Top](#table-of-contents)**

### Principal Component Analysis (PCA)

Principal component analysis (PCA) is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables (entities each of which takes on various numerical values) into a set of values of linearly uncorrelated variables called principal components.

```python

# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.decomposition as decomposition

# Import dataset
dataset = pd.read_csv('Wine.csv')
X = dataset.iloc[:, 0:13].values
y = dataset.iloc[:, 13].values

# Split the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Apply PCA
pca = decomposition.PCA(n_components = 2)
X_train = pca.fit_transform(X_train)
X_test = pca.transform(X_test)
explained_variance = pca.explained_variance_ratio_

# Fit Logistic Regression to the Training set
from sklearn.linear_model import LogisticRegression
classifier = LogisticRegression(random_state = 0)
classifier.fit(X_train, y_train)

# Predict the Test set results
y_pred = classifier.predict(X_test)

# Make the Confusion Matrix
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, y_pred)

# Visualize the Training set results
from matplotlib.colors import ListedColormap
X_set, y_set = X_train, y_train
X1, X2 = np.meshgrid(np.arange(start = X_set[:, 0].min() - 1, stop = X_set[:, 0].max() + 1, step = 0.01),
                     np.arange(start = X_set[:, 1].min() - 1, stop = X_set[:, 1].max() + 1, step = 0.01))

plt.contourf(X1, X2, classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),

alpha = 0.75, cmap = ListedColormap(('red', 'green', 'blue')))

plt.xlim(X1.min(), X1.max())
plt.ylim(X2.min(), X2.max())
for i, j in enumerate(np.unique(y_set)):
    plt.scatter(X_set[y_set == j, 0], X_set[y_set == j, 1],
                c = ListedColormap(('red', 'green', 'blue'))(i), label = j)
plt.title('Logistic Regression (Training set)')
plt.xlabel('PC1')
plt.ylabel('PC2')
plt.legend()
plt.show()

```

**[🔼Back to Top](#table-of-contents)**

### Independent Component Analysis (ICA)

Independent component analysis (ICA) is a technique for separating a multivariate signal into additive subcomponents, such that the independent components are statistically independent from each other, and as independent as possible from the original source signals.

```python

# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.decomposition as decomposition

# Import dataset
dataset = pd.read_csv('Wine.csv')
X = dataset.iloc[:, 0:13].values
y = dataset.iloc[:, 13].values

# Split the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Apply ICA
ica = decomposition.FastICA(n_components = 2)
X_train = ica.fit_transform(X_train)
X_test = ica.transform(X_test)

# Fit Logistic Regression to the Training set
from sklearn.linear_model import LogisticRegression
classifier = LogisticRegression(random_state = 0)
classifier.fit(X_train, y_train)

# Predict the Test set results
y_pred = classifier.predict(X_test)

```

**[🔼Back to Top](#table-of-contents)**

### Latent Dirichlet Allocation (LDA)

Latent Dirichlet allocation (LDA) is a generative statistical model that allows sets of observations to be explained by unobserved groups that explain why some parts of the data are similar. For example, if observations are words collected into documents, it posits that each document is a mixture of a small number of topics and that each word's presence is attributable to one of the document's topics.

```python

# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn.decomposition as decomposition

# Import dataset
dataset = pd.read_csv('Wine.csv')
X = dataset.iloc[:, 0:13].values
y = dataset.iloc[:, 13].values

# Split the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Apply LDA
lda = decomposition.LatentDirichletAllocation(n_components = 2)
X_train = lda.fit_transform(X_train)
X_test = lda.transform(X_test)

# Fit Logistic Regression to the Training set
from sklearn.linear_model import LogisticRegression
classifier = LogisticRegression(random_state = 0)
classifier.fit(X_train, y_train)

# Predict the Test set results
y_pred = classifier.predict(X_test)

```

**[🔼Back to Top](#table-of-contents)**

## Reinforcement Learning

Reinforcement learning (RL) is an area of machine learning concerned with how software agents ought to take actions in an environment in order to maximize the notion of cumulative reward. Reinforcement learning is one of three basic machine learning paradigms, alongside supervised learning and unsupervised learning.

Example of Reinforcement Learning are:

- How a robot dog learns the movement of its legs to walk/stand/run/shake hands.

- How a self-driving car learns to drive on the road.

- How a computer learns to play a game like chess, Go, or Dota.

- Trading bots that learn to trade in the stock market.

**[🔼Back to Top](#table-of-contents)**

### Q-Learning

Q-learning is a model-free reinforcement learning algorithm. It can be used to find the optimal action-selection policy for any given (finite) Markov decision process (MDP). Q-learning works by making updates to a Q-table, which is a 2-dimensional array that represents the expected future reward for each state-action pair.

```python

# Import libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Import dataset
dataset = pd.read_csv('Ads_CTR_Optimisation.csv')

# Implementing UCB
import math
N = 10000
d = 10
ads_selected = []
numbers_of_selections = [0] * d
sums_of_rewards = [0] * d
total_reward = 0

for n in range(0, N):
    ad = 0
    max_upper_bound = 0
    for i in range(0, d):
        if (numbers_of_selections[i] > 0):
            average_reward = sums_of_rewards[i] / numbers_of_selections[i]
            delta_i = math.sqrt(3/2 * math.log(n + 1) / numbers_of_selections[i])
            upper_bound = average_reward + delta_i
        else:
            upper_bound = 1e400
        if upper_bound > max_upper_bound:
            max_upper_bound = upper_bound
            ad = i
    ads_selected.append(ad)
    numbers_of_selections[ad] = numbers_of_selections[ad] + 1
    reward = dataset.values[n, ad]
    sums_of_rewards[ad] = sums_of_rewards[ad] + reward
    total_reward = total_reward + reward

# Visualising the results
plt.hist(ads_selected)
plt.title('Histogram of ads selections')
plt.xlabel('Ads')
plt.ylabel('Number of times each ad was selected')
plt.show()

```

### Upper Confidence Bound (UCB)

Upper confidence bound (UCB) is an algorithm for the multi-armed bandit problem. It is a greedy algorithm that tries to maximize the total reward by choosing the action that maximizes the expected reward plus a bonus that increases as the number of times the action is chosen increases.

```python

# Import libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Import dataset
dataset = pd.read_csv('Ads_CTR_Optimisation.csv')

# Implement UCB
import math
N = 10000
d = 10
ads_selected = []
numbers_of_selections = [0] * d
sums_of_rewards = [0] * d
total_reward = 0

for n in range(0, N):
    ad = 0
    max_upper_bound = 0
    for i in range(0, d):
        if (numbers_of_selections[i] > 0):
            average_reward = sums_of_rewards[i] / numbers_of_selections[i]
            delta_i = math.sqrt(3/2 * math.log(n + 1) / numbers_of_selections[i])
            upper_bound = average_reward + delta_i
        else:
            upper_bound = 1e400
        if upper_bound > max_upper_bound:
            max_upper_bound = upper_bound
            ad = i
    ads_selected.append(ad)
    numbers_of_selections[ad] = numbers_of_selections[ad] + 1
    reward = dataset.values[n, ad]
    sums_of_rewards[ad] = sums_of_rewards[ad] + reward
    total_reward = total_reward + reward

# Visualising the results
plt.hist(ads_selected)
plt.title('Histogram of ads selections')
plt.xlabel('Ads')
plt.ylabel('Number of times each ad was selected')
plt.show()

```

**[🔼Back to Top](#table-of-contents)**

### Thompson Sampling

Thompson sampling is a statistical method for choosing the next action in an unknown environment. It is a model-free reinforcement learning algorithm that can be used when the probability distribution of the possible rewards is unknown. It is a special case of the Bayesian bandit problem.

```python

# Import libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Import dataset
dataset = pd.read_csv('Ads_CTR_Optimisation.csv')

# Implement Thompson Sampling
import random
N = 10000
d = 10
ads_selected = []
numbers_of_rewards_1 = [0] * d
numbers_of_rewards_0 = [0] * d
total_reward = 0

for n in range(0, N):
    ad = 0
    max_random = 0
    for i in range(0, d):
        random_beta = random.betavariate(numbers_of_rewards_1[i] + 1, numbers_of_rewards_0[i] + 1)
        if random_beta > max_random:
            max_random = random_beta
            ad = i
    ads_selected.append(ad)
    reward = dataset.values[n, ad]
    if reward == 1:
        numbers_of_rewards_1[ad] = numbers_of_rewards_1[ad] + 1
    else:
        numbers_of_rewards_0[ad] = numbers_of_rewards_0[ad] + 1
    total_reward = total_reward + reward

# Visualising the results
plt.hist(ads_selected)
plt.title('Histogram of ads selections')
plt.xlabel('Ads')
plt.ylabel('Number of times each ad was selected')
plt.show()

```

**[🔼Back to Top](#table-of-contents)**

## Other Concepts

### Gradient Descent

Gradient descent is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost). Gradient descent is used in machine learning to update the parameters of a model.

Steps to implement gradient descent:

1. Initialize the parameters.
2. Calculate the cost function and its gradient.
3. Update the parameters using gradient descent.
4. Repeat steps 2 and 3 until you converge to a local minimum.

```python

def gradient_descent(x, y):
    m_curr = b_curr = 0
    iterations = 10000
    n = len(x)
    learning_rate = 0.08
    for i in range(iterations):
        y_predicted = m_curr * x + b_curr
        cost = (1/n) * sum([val**2 for val in (y-y_predicted)])
        md = -(2/n) * sum(x * (y - y_predicted))
        bd = -(2/n) * sum(y - y_predicted)
        m_curr = m_curr - learning_rate * md
        b_curr = b_curr - learning_rate * bd
        print("m {}, b {}, cost {} iteration {}".format(m_curr, b_curr, cost, i))

```

**[🔼Back to Top](#table-of-contents)**

### Bias-Variance Tradeoff

The bias-variance tradeoff is a property of statistical learning methods that states that a model's prediction error can be expressed as the sum of three other errors:

1. Bias: This is the error that is introduced by approximating a real-life problem, which may be extremely complicated, by a much simpler model.

2. Variance: This is the error that is introduced by the model's excessive sensitivity to small fluctuations in the training set.

3. Irreducible error: This is the error that is inherent in the problem itself.

<!-- Make a diagram using ASCII art to explain the bias-variance tradeoff -->

```
----------------------------------------------------
|                LOW VARIANCE      HIGH VARIANCE   |
|               ______________    --------------   |
|               |            |    | x          |   |
|               |  |------|  |    |  |------|  |   |
|               |  | xx   |  |    |  | x x  |  |   |
|   LOW BIAS    |  |xx✅x |  |    |  | x✅ x| |   |
|               |  |xxx   |  |    |  |  x xx|  |   |
|               |  |------|  |    |  |------|  |   |
|               |            |    |x           |   |
|               --------------    --------------   |
|                                                  |
|               ______________    ______________   |
|               | xxx xx     |    |x     x     |   |
|               |xx|------|  |    |x |------|  |   |
|               |  |x     |  |    |  |      |  |   |
|  HIGH BIAS    |  |  ✅  |  |   |  |  ✅  | x|   |
|               |  |      |  |    | x|      |  |   |
|               |  |------|  |    |  |------|  |   |
|               |            |    |  x      x  |   |
|               --------------    --------------   |
|                                                  |
| # IMPORTANT POINTS:                              |
| ✅ - Refers to Truth Value                       |
| x(🍁) - Refers to Model Answers                  |
| OVERFITTING =  LOW BIAS + HIGH VARIANCE          |
| UNDERFITTING = HIGH BIAS + LOW VARIANCE          |
----------------------------------------------------
```

**[🔼Back to Top](#table-of-contents)**

### Regularization

Regularization is a technique used to avoid overfitting in machine learning models. It is a technique that modifies the cost function by adding a penalty term to it. The penalty term is a measure of how complex the model is. The goal of regularization is to reduce the complexity of the model by penalizing the model for having high weights.

**[🔼Back to Top](#table-of-contents)**

### Cross-Validation

Cross-validation is a technique used to evaluate machine learning models by training several models on subsets of the available input data and evaluating them on the complementary subset of the data. It is a technique that is used to estimate the skill of a machine learning model on unseen data.

```python

def cross_validation(X, y, model, no_of_folds):
    X_folds = np.array_split(X, no_of_folds)
    y_folds = np.array_split(y, no_of_folds)
    scores = list()
    for i in range(no_of_folds):
        X_train = list(X_folds)
        X_test = X_train.pop(i)
        X_train = np.concatenate(X_train)
        y_train = list(y_folds)
        y_test = y_train.pop(i)
        y_train = np.concatenate(y_train)
        model.fit(X_train, y_train)
        scores.append(model.score(X_test, y_test))
    return scores

```

**[🔼Back to Top](#table-of-contents)**

### Hyperparameter Tuning

Hyperparameter tuning is the process of finding the optimal values for a model's hyperparameters. Hyperparameters are parameters that are not directly learnt within estimators. In scikit-learn, they are passed as arguments to the constructor of the estimator classes.

```python

from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC

parameters = [{'C': [1, 10, 100, 1000], 'kernel': ['linear']},
              {'C': [1, 10, 100, 1000], 'kernel': ['rbf'], 'gamma': [0.5, 0.1, 0.01, 0.001, 0.0001]}]
grid_search = GridSearchCV(estimator = classifier,
                           param_grid = parameters,
                           scoring = 'accuracy',
                           cv = 10,
                           n_jobs = -1)

```

**[🔼Back to Top](#table-of-contents)**

### Feature Scaling

Feature scaling is a method used to standardize the range of independent variables or features of data. In data processing, it is also known as data normalization and is generally performed during the data preprocessing step.

```python

from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

```

**[🔼Back to Top](#table-of-contents)**
