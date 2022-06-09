import 'package:flutter/material.dart';

void main() => runApp(MonApplication());

class MonApplication extends StatelessWidget {

  @override
  Widget build(BuildContext context) {

     return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Bonjour App'),),
        body: Center(
          child:Text ('Bonjour'),)
      ),
      );
  }
}