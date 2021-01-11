module.exports = {
  configureWebpack: {
    module: {
      rules: [
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        //   options: {
        //     loaders: {
        //       scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
        //       sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
        //     }
        //   }
        // },
        {
          test: /\/.scss$/,
          loaders: ['style', 'css', 'sass']
        }
      ]
    },
  },
  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: false
    }
  }
}
