module.exports = {
  test: process.env.TEST_VAL,
  production: false,
  services: {
    //localhost auth

    // auth: {
    //   responseType: 'code',
    //   url: 'https://a-qa.labshare.org/_auth/vTest',
    //   clientId: 'local',
    //   clientSecret: 'bb301869-0214-4435-b80f-60b68b2c4901',
    //   redirectUrl: 'http://localhost:4200',
    //   tenant: 'polus-qa'
    // },

    //ci auth

    auth: {
      responseType: 'code',
      url: 'https://a-qa.labshare.org/_auth/vTest',
      clientId: 'polus-wipp-ui-test',
      clientSecret: '14c0949b-a509-4ac9-a10b-75a6484b1d98',
      redirectUrl: 'https://polus-notebooks-hub-ui.ci.aws.labshare.org',
      tenant: 'polus-qa'
    },

    logging: {
      url: process.env.SERVICES_LOG_URL,
      application: process.env.SERVICES_LOG_APP,
      environment: process.env.SERVICES_LOG_ENV,
      subTag: process.env.SERVICES_LOG_TAG
    }
  }
};


// module.exports = {
//   test: process.env.TEST_VAL,
//   production: false,
//   services: {
//     auth: {
//       responseType: 'code',
//       url: process.env.SERVICES_AUTH_URL,
//       clientId: process.env.SERVICES_AUTH_CLIENT_ID,
//       tenant: process.env.SERVICES_AUTH_TENANT
//     },
//     logging: {
//       url: process.env.SERVICES_LOG_URL,
//       application: process.env.SERVICES_LOG_APP,
//       environment: process.env.SERVICES_LOG_ENV,
//       subTag: process.env.SERVICES_LOG_TAG
//     }
//   }
// };
