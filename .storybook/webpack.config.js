const path = require('path');

module.exports = async ({ config, mode }) => {

  config.module.rules = config.module.rules.filter(rule => !rule.test.test('.scss'));

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};
