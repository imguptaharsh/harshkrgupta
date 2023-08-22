const webpack = require('webpack');

module.exports = {
  // ... Other webpack configuration options ...

  plugins: [
    new webpack.DefinePlugin({
      'process.env.SERVICE_ID': JSON.stringify('service_2fmusqk'),
      'process.env.TEMPLATE_ID': JSON.stringify('template_468l8y6'),
      'process.env.USER_ID': JSON.stringify('JH7ryCo-mS1Fe6rxi'),
    }),
    // ... Other plugins ...
  ],
};
