import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, StyleProvider } from 'native-base';
import stores from './stores';
import getTheme from './themes/components';
import { screens } from './screens';

// Define navigator
const Navigator = StackNavigator(screens, { headerMode: 'none', initialRouteName: 'Start', });

class App extends Component {
  render = () => (
    <StyleProvider style={getTheme()}>
      <Provider {...stores}>
        <Navigator />
      </Provider>
    </StyleProvider>
  );
}

export { App };