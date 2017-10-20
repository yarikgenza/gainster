import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './themes/components';
import { screens } from './screens';

// Define navigator
const Navigator = StackNavigator(screens, { headerMode: 'none' });

class App extends Component {
  render = () => (
    <StyleProvider style={getTheme()}>
      <Navigator />
    </StyleProvider>
  );
}

export { App };