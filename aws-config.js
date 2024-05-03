import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2_MXefi87Ym'
  })
});

export default AWS;