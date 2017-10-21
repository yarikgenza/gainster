import * as Animatable from 'react-native-animatable';
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, H1, Body, Text, Icon } from 'native-base';
import theme from '../themes';

class LaunchScreen extends Component {
  render = () => (
    <Container>
      <Content>
        <Animatable.Image
          animation="fadeIn"
          style={styles.background}
          source={require('../images/splash.png')}
        >
          <Animatable.Image
            animation="flipInX"
            delay={300}
            source={require('../images/logo.png')}
            style={styles.logo}
          />
        </Animatable.Image>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignSelf: 'stretch',
    width: theme.deviceWidth,
    height: theme.deviceHeight
  },
  logo: {
    width: theme.deviceWidth / 2,
    height: theme.deviceWidth / 2,
    marginTop: theme.deviceHeight / 10,
    alignSelf: 'center',
  }
  /* h1: {
    color: theme.appNameTextColor,
    fontSize: 50,
    textAlign: 'center',
    marginTop: theme.deviceHeight / 5
  }, */
});

export default Animatable.createAnimatableComponent(LaunchScreen);