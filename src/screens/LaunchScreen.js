import * as Animatable from 'react-native-animatable';
import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Container, Content, Text, Icon, Spinner, Button } from 'native-base';
import theme from '../themes';

import FacebookLoginButton from '../components/FacebookLoginButton';
import {
    checkFbAuth as isUserAuthorized,
    getFbUser as getUser
} from '../utils';

@inject('user')
@observer
class LaunchScreen extends Component {

  @observable isLoading = true;
  @observable isAuthorized = null;

  async componentDidMount() {
    try {
      const isAuthorized = await isUserAuthorized();
      if (isAuthorized) {
        const user = await getUser();
        this.props.user.setProfile(user);
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
    <View>
      <View style={styles.welcomeTextContainer}>
        <Text style={NBstyles.welcomeText}>Hello, {this.props.user.first_name}!</Text>
      </View>
      <View style={styles.skipButtonContainer}>
          <Button style={NBstyles.skipButton} block light>
            <Text style={NBstyles.buttonText}>
              Countinue
            </Text>
            <Icon name="arrow-round-forward"/>
          </Button>
        </View>
    </View>
    ) : (<View style={styles.fbButtonContainer}>
      <View>
        <View style={styles.fbButtonContainer}>
          <FacebookLoginButton />
        </View>
        <View style={styles.skipButtonContainer}>
          <Button style={NBstyles.skipButton} block light>
            <Text style={NBstyles.buttonText}>
              Skip login
            </Text>
            <Icon name="arrow-round-forward"/>
          </Button>
        </View>
      </View>
    </View>)

    return (
      <Container>
        <Content>
          <Animatable.Image
            animation="fadeIn"
            useNativeDriver
            style={styles.background}
            source={require('../images/splash.png')}
          >
            <Animatable.Image
              animation="flipInX"
              useNativeDriver
              delay={300}
              source={require('../images/logo_grey.png')}
              style={styles.logo}
            />
            <Animatable.Text
              animation="flipInY"
              useNativeDriver
              delay={300}
              style={styles.h1}
            >
              GAINSTER
            </Animatable.Text>
            {isLoading ? (<Spinner color="white" />) : renderContent()}
          </Animatable.Image>
        </Content>
      </Container>
    );
  }
}

const NBstyles = {
  skipButton: {
    width: (theme.deviceWidth - theme.deviceWidth / 4),
    height: theme.deviceHeight / 12,
    borderRadius: 5
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 50
  },
  welcomeText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

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
  fbButtonContainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: theme.deviceHeight / 7,
  },
  skipButtonContainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: theme.deviceHeight / 10,
  },
  welcomeTextContainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: theme.deviceHeight / 10,
  }
});

export default Animatable.createAnimatableComponent(LaunchScreen);