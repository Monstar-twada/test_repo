import Auth from '@aws-amplify/auth'

const plugin = () => {
  Auth.configure({
    Auth: {
      region: 'us-west-2',
      userPoolId: 'us-west-2_9p8NZfOa5',
      userPoolWebClientId: '34j525o2171mi0bf7tfuv5ucak',
    },
  })
}

export default plugin
