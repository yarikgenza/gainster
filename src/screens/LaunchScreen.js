import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, H1, Body, Text, Icon } from 'native-base';
import theme from '../themes';

export default class LaunchScreen extends Component {
  render = () => (
    <Container>
      <Content>
        <Image
          style={styles.background}
          source={require('../images/splash.png')}
        >
          <Image
            source={require('../images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.h1}>Gainster</Text>
          <Icon name="ios-arrow-forward" style={{fontSize: 50, margin: 20, marginLeft: (theme.deviceWidth / 2) - 10, color: 'white'}} />
        </Image>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  h1: {
    color: theme.appNameTextColor,
    fontSize: 50,
    textAlign: 'center',
    marginTop: theme.deviceHeight / 5
  },
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
});