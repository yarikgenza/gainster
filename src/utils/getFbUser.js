import {
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const getFbUser = () => new Promise((resolve, reject) => {
  const infoRequest = new GraphRequest(
    '/me',
    {
      parameters: {
        fields: {
        string: 'email,name,first_name,last_name',
      }
    }
    },
    (err, result) => {
      if (err) reject(err)
               resolve(result);
    },
  );
  // Start the request
  new GraphRequestManager().addRequest(infoRequest).start();
})

export default getFbUser;

