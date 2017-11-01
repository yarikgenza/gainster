import { AccessToken } from 'react-native-fbsdk';

export default isUserAuthorized = () => new Promise((resolve, reject) => {
  AccessToken.getCurrentAccessToken().then(
    (data) => {
      if (data) {
        resolve(true);
      } else {
        resolve(false);
      }
    }
  ).catch(err => resolve(false));
});