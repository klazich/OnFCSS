const path = require('path')

let config = {
  entry: path.resolve(__dirname, 'src/js/main.js'),

  stats: {
    colors: true,
  },

  output: {
    filename  : 'bundle.js',
    path      : path.resolve(__dirname, 'tmp', 'js'),
    publicPath: '/js/',
  },

  module: {
    rules: [
      {
        test   : /\.js$/,
        loader : ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test  : /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test   : /\.svg$/,
        loader : 'vue-svg-loader', // `vue-svg` for webpack 1.x
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true },
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ],
  },

  resolve: {
    alias: { vue$: 'vue/dist/vue.esm.js', },
  },
}

module.exports = config