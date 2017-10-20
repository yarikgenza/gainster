import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './themes/components';

class App extends Component {
  render = () => (
    <StyleProvider style={getTheme()}>
      <Container>
        <Content>
          <Text>
            Hello world!
            (Gainster app)
          </Text>
        </Content>
      </Container>
    </StyleProvider>
  );
}

export { App };