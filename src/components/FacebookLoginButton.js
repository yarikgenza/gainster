import React, { Component } from 'react';
import { Button, Text, Icon } from 'native-base';
import { LoginManager } from 'react-native-fbsdk'

import theme from '../themes';

export default class FacebookLoginButton extends Component {
  handleFacebookLogin () {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      (error) => {
        console.log('Login fail with error: ' + error)
      }
    )
  }
  render () {
    return ( 
      <Button
        block
        style={styles.button}
        onPress={this.handleFacebookLogin}  
      >
        <Icon name="logo-facebook" style={styles.fbIcon} />
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </Button>
    )
  }
}

const styles = {
  button: {
    width: (theme.deviceWidth - theme.deviceWidth / 4),
    height: theme.deviceHeight / 12,
    backgroundColor: 'rgb(52, 80, 163)',
    borderRadius: 5
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17
  },
  fbIcon: {
    fontSize: 40,
  }
};