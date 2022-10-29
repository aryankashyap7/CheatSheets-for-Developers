---
layout: ../../layouts/BlogLayout.astro
title: "Deep Learning Cheatsheet"
---

## Synopsis

Deep Learning is a subfield of machine learning concerned with algorithms inspired by the structure and function of the brain called artificial neural networks. Learning can be supervised, semi-supervised or unsupervised.

**[🔼Back to Top](#table-of-contents)**

## Neural Networks

Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns. They interpret sensory data through a kind of machine perception, labeling or clustering raw input. The patterns they recognize are numerical, contained in vectors, into which all real-world data, be it images, sound, text or time series, must be translated. Neural networks can adapt to changing input; so the network generates the best possible result without needing to redesign the output criteria.

**[🔼Back to Top](#table-of-contents)**

### Architecture

In a neural network, the nodes are organized in layers. An input layer, a hidden layer and an output layer.

**[🔼Back to Top](#table-of-contents)**

### Activation Functions

Activation functions are used to introduce non-linearity into the output of a node. Without activation functions, neural networks would be equivalent to a single-layer perceptron, which can only learn linear functions.

The most common activation functions are:

| Function   | Description                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Sigmoid    | The sigmoid function is a non-linear function that maps any real value into another value between 0 and 1. It is an S-shaped curve.         |
| Tanh       | The tanh function is a non-linear function that maps any real value into another value between -1 and 1. It is a S-shaped curve.            |
| ReLU       | The ReLU function is a non-linear function that maps any real value into another value between 0 and infinity. It is a straight line.       |
| Leaky ReLU | The Leaky ReLU function is a non-linear function that maps any real value into another value between 0 and infinity. It is a straight line. |
| Softmax    | The softmax function is a non-linear function that maps a vector of values to a vector of probabilities that sum to 1.                      |

**[🔼Back to Top](#table-of-contents)**

### Loss Functions

Loss functions are used to measure how well the neural network model fits the training data. The loss function is the objective function that the neural network tries to minimize during training.

The most common loss functions are:

| Function                  | Description                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Mean Squared Error        | The mean squared error is the sum of the squared differences between the target and the output.              |
| Mean Absolute Error       | The mean absolute error is the sum of the absolute differences between the target and the output.            |
| Binary Cross-Entropy      | The binary cross-entropy is the sum of the binary cross-entropy between the target and the output.           |
| Categorical Cross-Entropy | The categorical cross-entropy is the sum of the categorical cross-entropy between the target and the output. |

**[🔼Back to Top](#table-of-contents)**

### Optimizers

Optimizers are used to update the weights of the neural network. The goal of the optimizer is to find the best set of weights that minimize the loss function.

The most common optimizers are:

| Optimizer                     | Description                                                                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Gradient Descent              | Gradient descent is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost).              |
| Stochastic Gradient Descent   | Stochastic gradient descent is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost).   |
| Momentum                      | Momentum is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost).                      |
| Nesterov Accelerated Gradient | Nesterov accelerated gradient is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost). |
| Adagrad                       | Adagrad is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost).                       |
| RMSprop                       | RMSprop is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost).                       |
| Adam                          | Adam is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost).                          |

**[🔼Back to Top](#table-of-contents)**

### Regularization

Regularization is a technique used to prevent overfitting. Overfitting is when the neural network model fits the training data too well. The model is too complex and does not generalize well to new data.

The most common regularization techniques are:

| Technique         | Description                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| L1 Regularization | L1 regularization is a regularization technique where the regularization term is the absolute value of the magnitude of coefficients.       |
| L2 Regularization | L2 regularization is a regularization technique where the regularization term is half the square of the magnitude of coefficients.          |
| Dropout           | Dropout is a regularization technique where a proportion of nodes in the layer are randomly ignored (set to zero) for each training sample. |

**[🔼Back to Top](#table-of-contents)**

### Backpropagation

Backpropagation is a method used to train artificial neural networks. It is a supervised learning technique that calculates the gradient of the loss function with respect to the weights of the neural network. The gradient is used to update the weights of the neural network.

**[🔼Back to Top](#table-of-contents)**

### Dropout

Dropout is a regularization technique where a proportion of nodes in the layer are randomly ignored (set to zero) for each training sample. This has the effect of making the training process noisy and forcing the network to learn robust features that are useful in conjunction with many different random subsets of the other neurons.

**[🔼Back to Top](#table-of-contents)**

## Convolutional Neural Networks

Convolutional neural networks are a class of deep neural networks, most commonly applied to analyzing visual imagery. They are also known as shift invariant or space invariant artificial neural networks (SIANN), based on their shared-weights architecture and translation invariance characteristics. They have applications in image and video recognition, recommender systems, image classification, medical image analysis, natural language processing, and financial time series.

**[🔼Back to Top](#table-of-contents)**

### Convolution

Convolution is a mathematical operation on two functions f and g that produces a third function that expresses how the shape of one is modified by the other. Convolution is a mathematical operation on two functions f and g that produces a third function that expresses how the shape of one is modified by the other.

**[🔼Back to Top](#table-of-contents)**

### Pooling

Pooling is a mathematical operation that reduces the spatial size of the input representation. It is used to reduce the number of parameters and computation in the network, and hence to also control overfitting.

The most common pooling operations are:

| Operation       | Description                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Max Pooling     | Max pooling is a pooling operation that calculates the maximum value for each patch of the input representation.     |
| Average Pooling | Average pooling is a pooling operation that calculates the average value for each patch of the input representation. |

**[🔼Back to Top](#table-of-contents)**

### Padding

Padding is a technique used to increase the size of the input representation. It is used to control the spatial size of the output representation.

The most common padding operations are:

| Operation      | Description                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Zero Padding   | Zero padding is a padding operation that adds zeros to the input representation.                                          |
| Mirror Padding | Mirror padding is a padding operation that adds the mirror image of the input representation to the input representation. |

**[🔼Back to Top](#table-of-contents)**

### Stride

Stride is a technique used to control the spatial size of the output representation. It is used to control the spatial size of the output representation.

**[🔼Back to Top](#table-of-contents)**

### Filters/Kernels

Filters are used to extract features from the input representation. They are also known as kernels.

**[🔼Back to Top](#table-of-contents)**

### 1x1 Convolution

1x1 convolution is a convolution operation that uses a 1x1 filter. It is used to reduce the number of channels in the input representation.

```
# 1x1 convolution
model.add(Conv2D(32, (1, 1), activation='relu', input_shape=(32, 32, 3)))
```

**[🔼Back to Top](#table-of-contents)**

### 3x3 Convolution

3x3 convolution is a convolution operation that uses a 3x3 filter. It is used to extract features from the input representation.

```
[[1, 1, 1],
 [1, 1, 1],
 [1, 1, 1]]
```

**[🔼Back to Top](#table-of-contents)**

### Feature Maps

Feature maps are the output of a convolution operation. They are also known as activation maps.

**[🔼Back to Top](#table-of-contents)**

### Receptive Field

The receptive field of a neuron is the region of the input representation that the neuron is sensitive to.

**[🔼Back to Top](#table-of-contents)**

## Recurrent Neural Networks

Recurrent neural networks are a class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence. This allows it to exhibit temporal dynamic behavior for a time sequence. Unlike feedforward neural networks, RNNs can use their internal state (memory) to process sequences of inputs. This makes them applicable to tasks such as unsegmented, connected handwriting recognition or speech recognition.

**[🔼Back to Top](#table-of-contents)**

### Vanishing Gradient

The vanishing gradient problem is a problem in which the gradient of the loss function with respect to the weights of the neural network becomes very small. This makes it difficult for the neural network to learn.

**[🔼Back to Top](#table-of-contents)**

### Exploding Gradient

The exploding gradient problem is a problem in which the gradient of the loss function with respect to the weights of the neural network becomes very large. This makes it difficult for the neural network to learn.

**[🔼Back to Top](#table-of-contents)**

### Long Short-Term Memory

Long Short-Term Memory (LSTM) is an artificial recurrent neural network (RNN) architecture used in the field of deep learning. Unlike standard feedforward neural networks, LSTM has feedback connections. It can not only process single data points (such as images), but also entire sequences of data (such as speech or video). For example, LSTM is applicable to tasks such as unsegmented, connected handwriting recognition or speech recognition.

**[🔼Back to Top](#table-of-contents)**

### Gated Recurrent Unit

Gated recurrent unit (GRU) is a gating mechanism in recurrent neural networks. GRU is an artificial recurrent neural network (RNN) architecture used in the field of deep learning. Unlike standard feedforward neural networks, GRU has feedback connections. It can not only process single data points (such as images), but also entire sequences of data (such as speech or video). For example, GRU is applicable to tasks such as unsegmented, connected handwriting recognition or speech recognition.

**[🔼Back to Top](#table-of-contents)**

### Generative Adversarial Network

Generative adversarial network (GAN) is an unsupervised machine learning technique that uses two neural networks competing against each other to generate new data. The technique was developed by Ian Goodfellow and his colleagues at the University of Montreal in 2014.

**[🔼Back to Top](#table-of-contents)**

## Reinforcement Learning

Reinforcement learning is an area of machine learning concerned with how software agents ought to take actions in an environment in order to maximize the notion of cumulative reward.

**[🔼Back to Top](#table-of-contents)**

### Markov Decision Process

A Markov decision process (MDP) is a mathematical framework for modeling decision making in situations where outcomes are partly random and partly under the control of a decision maker.

**[🔼Back to Top](#table-of-contents)**

### Q-Learning

Q-learning is a model-free reinforcement learning algorithm. It can be used to find the optimal action-selection policy for a given (finite) Markov decision process (MDP).

**[🔼Back to Top](#table-of-contents)**

### Policy Gradient

Policy gradient is a class of reinforcement learning methods that directly optimize the policy function parameterized by a neural network.

**[🔼Back to Top](#table-of-contents)**
