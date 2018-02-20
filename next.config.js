const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [ 'babel-loader', 'raw-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
          'babel-loader',
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              includePaths: [ 'node_modules', 'components']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    return config;
  }
}
