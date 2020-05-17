// 通过webpack-chain查看脚手架的webpack配置。无实际作用。
var config = {
  mode: 'development',
  devtool: 'source-map',
  target: function () { /* omitted long function */ },
  output: {
    path: '/Users/tkgkn/Documents/my/mini-app/dist',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    globalObject: 'wx'
  },
  resolve: {
    symlinks: true,
    alias: {
      '@tarojs/components$': '@tarojs/components/mini',
      'react-dom': '@tarojs/react'
    },
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      'mjs'
    ],
    mainFields: [
      'browser',
      'module',
      'main'
    ],
    modules: [
      'node_modules',
      '/Users/tkgkn/Documents/my/mini-app/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules'
    ]
  },
  module: {
    rules: [
      /* config.module.rule('sass') */
      {
        test: /\.(s[ac]ss)$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('0') */
          {
            include: [
              /(.*\.module).*\.(css|s[ac]ss|less|styl)\b/
            ],
            use: [
              /* config.module.rule('sass').oneOf('0').use('0') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('sass').oneOf('0').use('1') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('0').use('2') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('0').use('3') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () { /* omitted long function */ },
                    renderSync: function () { /* omitted long function */ },
                    info: 'node-sass\t4.14.1\t(Wrapper)\t[JavaScript]\nlibsass  \t3.5.5\t(Sass Compiler)\t[C/C++]',
                    types: {
                      Number: function SassNumber() { [native code] },
                      String: function SassString() { [native code] },
                      Color: function SassColor() { [native code] },
                      Boolean: function SassBoolean() { [native code] },
                      List: function SassList() { [native code] },
                      Map: function SassMap() { [native code] },
                      Null: function SassNull() { [native code] },
                      Error: function SassError() { [native code] }
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('1') */
          {
            use: [
              /* config.module.rule('sass').oneOf('1').use('0') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('sass').oneOf('1').use('1') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: false
                }
              },
              /* config.module.rule('sass').oneOf('1').use('2') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('1').use('3') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () { /* omitted long function */ },
                    renderSync: function () { /* omitted long function */ },
                    info: 'node-sass\t4.14.1\t(Wrapper)\t[JavaScript]\nlibsass  \t3.5.5\t(Sass Compiler)\t[C/C++]',
                    types: {
                      Number: function SassNumber() { [native code] },
                      String: function SassString() { [native code] },
                      Color: function SassColor() { [native code] },
                      Boolean: function SassBoolean() { [native code] },
                      List: function SassList() { [native code] },
                      Map: function SassMap() { [native code] },
                      Null: function SassNull() { [native code] },
                      Error: function SassError() { [native code] }
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('0') */
          {
            include: [
              /(.*\.module).*\.(css|s[ac]ss|less|styl)\b/
            ],
            use: [
              /* config.module.rule('less').oneOf('0').use('0') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('less').oneOf('0').use('1') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('0').use('2') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('0').use('3') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('1') */
          {
            use: [
              /* config.module.rule('less').oneOf('1').use('0') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('less').oneOf('1').use('1') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: false
                }
              },
              /* config.module.rule('less').oneOf('1').use('2') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('1').use('3') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('0') */
          {
            include: [
              /(.*\.module).*\.(css|s[ac]ss|less|styl)\b/
            ],
            use: [
              /* config.module.rule('stylus').oneOf('0').use('0') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('stylus').oneOf('0').use('1') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('0').use('2') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('0').use('3') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/stylus-loader/index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('1') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('1').use('0') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('stylus').oneOf('1').use('1') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: false
                }
              },
              /* config.module.rule('stylus').oneOf('1').use('2') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('1').use('3') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/stylus-loader/index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('nomorlCss') */
      {
        test: /\.(css|wxss|acss)(\?.*)?$/,
        oneOf: [
          /* config.module.rule('nomorlCss').oneOf('0') */
          {
            include: [
              /(.*\.module).*\.(css|s[ac]ss|less|styl)\b/
            ],
            use: [
              /* config.module.rule('nomorlCss').oneOf('0').use('0') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('nomorlCss').oneOf('0').use('1') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('nomorlCss').oneOf('0').use('2') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('nomorlCss').oneOf('1') */
          {
            use: [
              /* config.module.rule('nomorlCss').oneOf('1').use('0') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              /* config.module.rule('nomorlCss').oneOf('1').use('1') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: false
                }
              },
              /* config.module.rule('nomorlCss').oneOf('1').use('2') */
              {
                loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/i,
        use: [
          /* config.module.rule('vue').use('vueLoader') */
          {
            loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/vue-loader/lib/index.js',
            options: {
              optimizeSSR: false,
              transformAssetUrls: {
                video: [
                  'src',
                  'poster'
                ],
                'live-player': 'src',
                audio: 'src',
                source: 'src',
                image: 'src',
                'cover-image': 'src'
              },
              compilerOptions: {
                modules: [
                  {
                    preTransformNode: function () { /* omitted long function */ }
                  }
                ]
              }
            }
          }
        ]
      },
      /* config.module.rule('script') */
      {
        test: /\.[tj]sx?$/i,
        use: [
          /* config.module.rule('script').use('babelLoader') */
          {
            loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('template') */
      {
        test: /\.(wxml|axml|ttml|qml|swan|jxml)(\?.*)?$/,
        use: [
          /* config.module.rule('template').use('0') */
          {
            loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/file-loader/dist/cjs.js',
            options: {
              useRelativePath: true,
              name: '[path][name].wxml',
              context: '/Users/tkgkn/Documents/my/mini-app/src'
            }
          },
          /* config.module.rule('template').use('1') */
          {
            loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js',
            options: {
              buildAdapter: 'weapp'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('urlLoader') */
          {
            loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 1024,
              name: '[path][name].[ext]',
              useRelativePath: true,
              context: '/Users/tkgkn/Documents/my/mini-app/src'
            }
          }
        ]
      },
      /* config.module.rule('font') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          /* config.module.rule('font').use('urlLoader') */
          {
            loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 1024,
              name: '[path][name].[ext]',
              useRelativePath: true,
              context: '/Users/tkgkn/Documents/my/mini-app/src'
            }
          }
        ]
      },
      /* config.module.rule('image') */
      {
        test: /\.(png|jpe?g|gif|bpm|svg|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('image').use('urlLoader') */
          {
            loader: '/Users/tkgkn/Documents/my/mini-app/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 1024,
              name: '[path][name].[ext]',
              useRelativePath: true,
              context: '/Users/tkgkn/Documents/my/mini-app/src'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    usedExports: true,
    minimizer: [],
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        common: {
          name: 'common',
          minChunks: 2,
          priority: 1
        },
        vendors: {
          name: 'vendors',
          minChunks: 2,
          test: function () { /* omitted long function */ },
          priority: 10
        },
        taro: {
          name: 'taro',
          test: function () { /* omitted long function */ },
          priority: 100
        }
      }
    }
  },
  plugins: [
    /* config.plugin('copyWebpackPlugin') */
    new CopyPlugin(
      [],
      {}
    ),
    /* config.plugin('definePlugin') */
    new DefinePlugin(
      {
        'process.env.NODE_ENV': '"development"',
        'process.env.FRAMEWORK': '"react"',
        'process.env.TARO_ENV': '"weapp"'
      }
    ),
    /* config.plugin('miniPlugin') */
    new TaroMiniPlugin(
      {
        sourceDir: '/Users/tkgkn/Documents/my/mini-app/src',
        outputDir: '/Users/tkgkn/Documents/my/mini-app/dist',
        buildAdapter: 'weapp',
        constantsReplaceList: {
          'process.env.NODE_ENV': '"development"',
          'process.env.FRAMEWORK': '"react"',
          'process.env.TARO_ENV': '"weapp"'
        },
        nodeModulesPath: '/Users/tkgkn/Documents/my/mini-app/node_modules',
        quickappJSON: undefined,
        designWidth: 750,
        pluginConfig: undefined,
        isBuildPlugin: false,
        commonChunks: [
          'runtime',
          'vendors',
          'taro',
          'common'
        ],
        baseLevel: 16,
        framework: 'react',
        prerender: undefined,
        addChunkPages: undefined
      }
    ),
    /* config.plugin('miniCssExtractPlugin') */
    new MiniCssExtractPlugin(
      {
        filename: '[name].wxss',
        chunkFilename: '[name].wxss'
      }
    ),
    /* config.plugin('providerPlugin') */
    new ProvidePlugin(
      {
        window: [
          '@tarojs/runtime',
          'window'
        ],
        document: [
          '@tarojs/runtime',
          'document'
        ],
        navigator: [
          '@tarojs/runtime',
          'navigator'
        ],
        requestAnimationFrame: [
          '@tarojs/runtime',
          'requestAnimationFrame'
        ],
        cancelAnimationFrame: [
          '@tarojs/runtime',
          'cancelAnimationFrame'
        ]
      }
    )
  ],
  entry: {
    app: [
      '/Users/tkgkn/Documents/my/mini-app/src/app.tsx'
    ]
  }
}
