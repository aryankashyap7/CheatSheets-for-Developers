---
layout: ../../layouts/CheatSheet.astro
title: "Flutter Cheatsheet"
---

## Synopsis

Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename "Sky" and ran on the Android operating system.

## Widget

A widget is the basic type of controller in _Flutter Material_.
There are two type of basic Widget we can extend our classes: `StatefulWidget` or `StatelessWidget`.

### Stateful

**StatefulWidget** are all the widget that interally have a dynamic value that can change during usage. It can receive an input value in the constructor or reference to functions.
You need to create two classes like:

```dart
class BasePage extends StatefulWidget {
  State<StatefulWidget> createState() {
    return _BasePageState();
  }
}

class _BasePageState extends State<BasePage> {
  int _value = 0;

  void _increment() {
    setState(() {
      _value++;
    });
  }
}
```

When you are going to update the value you need to wrap it in `setState(() {})` function.

If you want to mimic the `viewDidLoad` of iOS you can use in the State class this call

```dart
@override
void initState() {
  super.initState()
  // add here what to do, e.g. fetch data from remote
}
```

Instead if you want get triggered on status update:

```dart
@override
void didUpdateWidget(CurrentType oldWidget) {
  super.didUpdateWidget(oldWidget);
  // here you can check value of old widget status and compare vs current one
}
```

### Stateless

**StatelessWidget** are components that are rendered and keep that value. A refresh by a parent is needed to update the content. It can receive a value from the constructor.

## Model

Dart has class a nice way to create an init is using the approach like { this.param, this.param2 }.

```dart
class New {
  final String element;
  final double number;

  New({ this.element, this.number });
}
```

In order to have mandatory params you need to include `flutter/material.dart` so you can transform you class to

```dart
class En {
  final String element;
  final double number;

  New({ @required this.element, @required this.number });
}
```

If you wrap a param between **[]** that param is optional instead.

### Scope Model

Is a good way to share data within the app in an unique place, accessibile in any other class.
Scope model gives you a way to keep the state of the model created above.
So once _scope_model_ has been imported you can create the model like:

```dart
class EnModel extends Model {
}
```

When you work with item is better to **avoid** to pass back the list you are using to manage item internally, better to use a copy of that.
So we have to use a **getter**.

```dart
class EnModel extends Model {
  List<String> _item = [];
  List<String> get item {
    List.from(_item);
  };
}
```

In order later to use that, in the widget **build** you have to:

```dart
return ScopeModelDescendant<EnModel>(builder: (BuildContext context, Widget child, EnModel model){
  return _buildWidget(model.item);
},);
```

Each time the build is called the data is read back from state.

We can force the refresh of a build function using the `notifyListeners()`.

If you have more than one model, better to create a `main.dart` model like:

```dart
class MainModel extends Model with New, EnModel {}
```

**Centralize**
In order to avoid to call this in all the classes, we can easily wrap our MaterialApp in `ScopeModel<EnModel>(child: MaterialApp[...], model: EnModel())`.

So all the children of MaterialApp will have access to EnModel structure.

In order to have access you will have still to use ScopeModelDescendant to wrap the Widget that will use that as above.

## UI

### Icon & Splashpage

https://flutter.io/assets-and-images/#updating-the-launch-screen

### Screen Size

`Size(MediaQuery.of(context).size.width`

### Colors & Themes

You can acces colors using `Colors.white`.
Each color has an extra parameter `withOpacity()` you can use to set the opacity.

You can use theme colors using `Theme.of(context).accentColor`

### Styling

You can add extra style (background color, rounded corners, etc) to a widget using `DecoratedBox`.

```
DecorationBox(decoration: BoxDecoration());
```

## Layout

`ListView` acts like a good stack for put elements in colums.
If it contains only an object, use `SingleChildScrollView`.

Either `Column` and `Row` are ok but doesn't support scroll.
If you want to widget in a column/row to take as much space as possible wrap it in `Expanded`.
`Flexible` is also available and you can provide which priority on weight the widget will have.
Both `Expanded` and `Flexible` accept a `flex` param, where you can pass a weight.

`SizeBox` is a widget with fixed size, it is useful e.g. to add simple margin between widgets.

`Container` is a box where you can add your Widget and set some params like _margin_, _padding_, _color_, _decoration_, etc.

### Size

`MediaQuery` is a powerful tool to make adaptive UI according device feature (e.g. _screen size_, _orientation_).

```dart
MediaQuery.of(context)
```

## Navigation

### Route to other page without back (eg android final)

```dart
Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(
                    builder: (BuildContext context) => Class(
                          param: value,
                        ),
                  )),
```

### Route to other page with back

```dart
Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (BuildContext context) => Class(
                          param: value,
                        ),
                  )),
```

### Back (Basic)

`Navigator.pop(context);`

### Back (Passing data)

`Navigator.pop(context, back_value);`

### Action after navigation

In certain cases is useful to trigger an action when a navigation is called,you can do that combinind a `then((_) {})` function in the pipe of the navigator.

Also edit `Navigator.push<type>[…].then((type value) {})` adding future type.

## Sidebar

### Add left drawer

In the drawer we can list several entries, each of those can have (or not) an Icon.

```dart
New Scaffold(drawer:
	Drawer(child:
		Column(children: <Widget>[
			AppBar(title: Text(‘Choose’), AutomaticallyImplyLeading: false ),
			ListTile(
			leading: Icon(Icons.list),
			title: Text(’Some Text’),
			onTap: () {}
) ])
```

### Add right drawer

`New Scaffold(endDrawer:`

## Tabs

Body of Scaffold needs to have TabBarView to manage switch between tabs contents.
The number in length is mandatory to be the same of the items in the TabBarView and TabBar tabs.

The pages has not to be Scaffold Widget, but directly the body because them are in the TabBarView that has already a Scaffold.

### Add drawer with tab on top like Android

```dart
DefaultTabController(length: 2, child: Scaffold( body: TabBarView(),  appBar: AppBar(bottom: TabBar(tabs: <Widget>[ Tab(icon:, text:) ])
```

### Add drawer with tab on Botton like iOS

```dart
DefaultTabController(length: 2, child: Scaffold( body: TabBarView(), bottomNavigationBar:  TabBar(tabs: <Widget>[ Tab() ])
```

## Routing

Add in main MaterialApp a new key routes that support a map.

```dart
routes: {
	“/“:  (BuildContext context) => HomeClass()
	“/admin”: (BuildContext context) => AdminClass()
}
```

Then in every part of the app you can call .pushReplacementNamed(‘/admin’, context);
Note:
If you set “/“ you have to remove the home value in the material app or an error will raise.

### Pass value in routes

Instead of using routes, you need to use onGenerateRoutes key.
If a route is already defined in routes it will raise an error.

```dart
onGenerateRoutes: (RouteSettings settings) {
	final List<String> pathElements = settings.name.split(“/“);

	if(pathElements[0] != “”) {
		return null;
	}
	if(pathElements[1] == ‘product’) {
		final int index = int.parse(pathElements[2]);
		return MaterialPageRoute<bool>(builder: (BuilderContext context) => ProductPage(_products[index]))
	}
	return null;
}
```

In this scenario the main file has to be converted in StatefulWidget to centralise where the variables are stored.
In the example I set MaterialPageRoute to return a bool, but we can se that to every other type.

Then you can call .pushNamed(context, ‘/product/‘ + index.toString())

Also there’s a fallback for not registered route onUnkownRoute.

## Alert

showDialog using an AlertDialog as Widget.

```dart
showDialog(context: context, builder: (BuilderContext context) {
	return AlertDialog(
		title: Text(),
		content: Text(),
		actions: <Widget> [
			FlatButton(child: Text(), onPressed: () {
				Navigator.pop(context); // close the dialog
			})
		]
}
```

## Modal

```dart
showModalButtonSheet(context: context, builder: (BuilderContext context) {
	return Center(
		child: Text()
	);
}
```

## Textfield

In order to add a _title_ we need to use `InputDecoration(labelText:)`.

In order to set a custom keyboard use `InputDecoration(keyboardType: (true|false))`.

In order to handle password use `InputDecoration(obscureText: (true|false)`.

In order to get the value `onChanged: (value) {}`. In order to monitor the value you need a `StatefulWidget`.

## AppBar

AppBar component allow you to set _title_, _back_ and _actions_ for the status bar.
`title` contains the title for widget.
`actions` is an array of widgets that stay on the right.

## Gesture

You can turn every widget with an action wrapping inside `GestureDetector`.

## Keyboard

If you need to hide an open keyboard you need to use `FocusScope`.

```dart
FocusScope.of(context).requestFocus(FocusNode());
```

So basically you fake the current focus node a new one not connected to any form/textarea.
