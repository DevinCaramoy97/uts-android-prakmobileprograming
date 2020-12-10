import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Form, Item, Input, Label, Textarea, Left, Body, Title, Right, Row } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/screen/Navbar';
import Login from './src/screen/Login';
import { NavigationContainer } from '@react-navigation/native';


export default class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Login />

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headermenu: {
    marginTop: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});