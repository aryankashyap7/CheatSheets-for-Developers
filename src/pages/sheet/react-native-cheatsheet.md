---
layout: ../../layouts/BlogLayout.astro
title: "React Native Cheatsheet"
---

### What is React Native

React Native is an SDK for building native mobile apps using JavaScript. It's based on React, a popular front-end library for building user interfaces using composable components created by Facebook.
Unlike the popular hybrid frameworks such as Ionic, React Native doesn't use a webview which means your mobile application is not a web application that has access to native device features like the case of Ionic but a native app that uses native components in both Android and iOS.
React Native is essentially a bridge that allows your JavaScript app to access native device features and UI components.

**[🔼Back to Top](#table-of-contents)**

### Features

Following are the features of React Native −

1. React − This is a Framework for building web and mobile apps using JavaScript.
2. Native − You can use native components controlled by JavaScript.
3. Platforms − React Native supports IOS and Android platform.

**[🔼Back to Top](#table-of-contents)**

### Difference between React and React Native

| React                                              | React Native                                                            |
| -------------------------------------------------- | ----------------------------------------------------------------------- |
| It is used for developing web applications.        | It is used for developing mobile applications.                          |
| It uses React-router for navigating web pages.     | It has a built-in navigator library for navigating mobile applications. |
| It uses HTML tags.                                 | It does not use HTML tags.                                              |
| It provides high security.                         | It provides low security in comparison to ReactJS.                      |
| In this, the virtual DOM renders the browser code. | In this, Native uses its API to render code for mobile applications.    |

**[🔼Back to Top](#table-of-contents)**

### Installing Expo CLI

Expo CLI is a command-line utility that allows to use Expo tools.

```
npm install -g expo-cli
```

**[🔼Back to Top](#table-of-contents)**

### Creating a React Native Project

Run the following command to create a new React Native project called "AwesomeProject":

```
npx create-expo-app AwesomeProject
cd AwesomeProject
npm start # you can also use: npx expo start

```

**[🔼Back to Top](#table-of-contents)**

### Function Components

```
import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Hello, world!</Text>
    </View>
  );
}

export default HelloWorldApp;
```

**[🔼Back to Top](#table-of-contents)**

### Class Components

```
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default HelloWorldApp;
```

**[🔼Back to Top](#table-of-contents)**

### Props

Most components can be customized when they are created, with different parameters. These creation parameters are called props.

```
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

export default LotsOfGreetings;
```

**[🔼Back to Top](#table-of-contents)**

### State

Unlike props that are read-only and should not be modified, the state allows React components to change their output over time in response to user actions, network responses and anything else.

```
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
```

**[🔼Back to Top](#table-of-contents)**

### List View

React Native ListView is a view component that contains the list of items and displays it in a vertically scrollable list.

```
export default class MyListComponent extends Component {
constructor() {
super();
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
this.state = {
dataSource: ds.cloneWithRows(['Android','iOS', 'Java','Php', 'Hadoop', 'Sap', 'Python','Ajax', 'C++']),
};
}
render() {
return (
<ListView
dataSource={this.state.dataSource}
renderRow={
(rowData) =>
<Text style={{fontSize: 30}}>{rowData}</Text>} />
); }
}
```

**[🔼Back to Top](#table-of-contents)**

### Touchable components

Tapping gestures can be captured by Touchable components and can display feedback when a gesture is recognized.

```
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
export default class Touchables extends Component {
_onPressButton() {
   alert('You tapped the button!')  }
 _onLongPressButton() {
   alert('You long-pressed the button!')
 }
render() {
return (
<View style={styles.container}>
<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
<View style={styles.button}>
<Text style={styles.buttonText}>TouchableHighlight</Text>
</View>
</TouchableHighlight>
);}
}

```

**[🔼Back to Top](#table-of-contents)**

### Flat List components

The FlatList component displays similarly structured data in a scrollable list. It works well for large lists of data where the number of list items might change over time.

```
import React, { Component } from 'react';
import { AppRegistry, FlatList,
   StyleSheet, Text, View,Alert } from 'react-native';

export default class FlatListBasics extends Component {

   renderSeparator = () => {
       return (
           <View
               style={{
                   height: 1,
                   width: "100%",
                   backgroundColor: "#000",
               }}
           />
       );
   };
   //handling onPress action
   getListViewItem = (item) => {
       Alert.alert(item.key);
   }

   render() {
       return (
           <View style={styles.container}>
               <FlatList
                   data={[
                       {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},
                       {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},
                   ]}
                   renderItem={({item}) =>
                       <Text style={styles.item}
                             onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}
                   ItemSeparatorComponent={this.renderSeparator}
               />
           </View>
       );
   }
}
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
```

**[🔼Back to Top](#table-of-contents)**

### Routing with React Navigation in React Native

One of the popular libraries for routing and navigation in a React Native application is React Navigation.

This library helps solve the problem of navigating between multiple screens and sharing data between them.

```
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={{ title: 'Welcome' }}
       />
       <Stack.Screen name="Profile" component={ProfileScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
};
```

**[🔼Back to Top](#table-of-contents)**
