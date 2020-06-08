/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    NODE_ENV: JSON.stringify('development')
  },
  defineConstants: {},
  terser: {
    enable: true,
    config: {
      // 配置项同 https://github.com/terser/terser#minify-options
    }
  },
  csso: {
    enable: true,
    config: {}
  },
  mini: {},
  h5: {}
};
