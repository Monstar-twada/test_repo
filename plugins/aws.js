import Auth from '@aws-amplify/auth'

const plugin = () => {
  Auth.configure({
    Auth: {
      // プロトタイプ
      // region: 'us-west-2',
      // userPoolId: 'us-west-2_9p8NZfOa5',
      // userPoolWebClientId: '34j525o2171mi0bf7tfuv5ucak',

      // テスト環境
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-1_WYQfDG450',
      userPoolWebClientId: '6hqcphuul6im51a9nh3jmuhtu1',
    },
  })
}

export default plugin
