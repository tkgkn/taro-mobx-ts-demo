export default {
  pages: ['pages/index/index', 'pages/my/my'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#333',
    backgroundColor: '#fafafa',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'tab1',
        iconPath: './assets/tabBar/discovery.png',
        selectedIconPath: './assets/tabBar/discoveryActive.png'
      },
      {
        pagePath: 'pages/my/my',
        text: 'tab2',
        iconPath: './assets/tabBar/my.png',
        selectedIconPath: './assets/tabBar/myActive.png'
      }
    ]
  }
};
