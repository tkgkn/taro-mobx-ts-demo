/* eslint-disable import/no-commonjs */

const path = require('path');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config = {
  projectName: 'mini-app',
  date: '2020-5-7',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    // 实现部分静态资源从src到dist目录的复制
    [
      path.resolve(__dirname, './plugins/CopyPlugin'),
      {
        files: ['ext.json'],
        from: path.resolve(__dirname, '../src/'),
        to: path.resolve(__dirname, '../dist/')
      }
    ]
  ],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain) {
      // 给moduel.sass增加d.ts
      chain.module
        .rule('sass')
        .oneOf('0')
        .use('@teamsupercell/typings-for-css-modules-loader')
        .loader('@teamsupercell/typings-for-css-modules-loader')
        .before('1');
      // 给.scss增加d.ts
      chain.module
        .rule('sass')
        .oneOf('1')
        .use('@teamsupercell/typings-for-css-modules-loader')
        .loader('@teamsupercell/typings-for-css-modules-loader')
        .before('1');

      // 给moduel.scss增加d.ts
      chain.module
        .rule('scss')
        .oneOf('0')
        .use('@teamsupercell/typings-for-css-modules-loader')
        .loader('@teamsupercell/typings-for-css-modules-loader')
        .before('1');
      // 给.scss增加d.ts
      chain.module
        .rule('scss')
        .oneOf('1')
        .use('@teamsupercell/typings-for-css-modules-loader')
        .loader('@teamsupercell/typings-for-css-modules-loader')
        .before('1');

      // 给resolve.plugins添加ts paths 插件。自动插入alias依赖
      chain.resolve.plugin('ts-config-paths').use(TsConfigPathsPlugin);

      // 查看webpack配置
      // console.log(chain.toString());
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
