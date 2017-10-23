import * as Animatable from 'react-native-animatable';
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Container, Content, H1, Body, Text, Icon, Spinner } from 'native-base';
import theme from '../themes';

import FacebookLogin from '../components/FacebookLogin';
import isUserAuthorized from '../utils/checkFbAuth';

@observer
class LaunchScreen extends Component {

  @observable isLoading = true;
  @observable isAuthorized = null;

  async componentDidMount() {
    try {
      const isAuthorized = await isUserAuthorized();
      if (isAuthorized) {
        this.isAuthorized = true;
        this.isLoading = false;
      } else {
        this.isAuthorized = false;
        this.isLoading = false;
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { isLoading, isAuthorized } = this;

    const renderContent = () => isAuthorized ? (
      <Text> </Text>
    ) : (<FacebookLogin />)

    return (
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
              source={require('../images/logo_grey.png')}
              style={styles.logo}
            />
            <Animatable.Text
              animation="flipInY"
              delay={300}
              style={styles.h1
            }>
              GAINSTER
            </Animatable.Text>
            {isLoading ? (<Spinner color="white" />) : renderContent()}
          </Animatable.Image>
        </Content>
      </Container>
    );
  }
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
    marginTop: theme.deviceHeight / 30,
    alignSelf: 'center',
  },
  h1: {
    color: theme.appNameTextColor,
    fontSize: 50,
    textAlign: 'center',
    marginTop: theme.deviceHeight / 2 - (theme.deviceHeight / 2)
  },
});

export default Animatable.createAnimatableComponent(LaunchScreen);