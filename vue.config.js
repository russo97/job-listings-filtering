const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@js': path.resolve(__dirname, 'src', 'assets', 'js'),
        '@sass': path.resolve(__dirname, 'src', 'assets', 'sass'),
        '@components': path.resolve(__dirname, 'src', 'components')
      }
    },

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            // 'sass-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: "@import '@sass/styles.scss';"
              }
            },
          ],
        },
      ],
    },
  },
}