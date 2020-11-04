import Auth from '@aws-amplify/auth';

const plugin = () => {
  Auth.configure({
    Auth: {
      region: process.env.COGNITO_REGION,
      userPoolId: process.env.COGNITO_USERPOOL_ID,
      userPoolWebClientId: process.env.COGNITO_USERPOOL_CLIENT_ID,
    },
  });
};

export default plugin;
