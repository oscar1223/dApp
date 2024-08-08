module.exports = {
    presets: [
      ['@babel/preset-env', {
        targets: {
          browsers: ['last 2 versions', 'not dead', 'not < 0.25%', 'not ie 11']
        },
        useBuiltIns: 'usage',
        corejs: 3
      }]
    ],
    plugins: ['@babel/plugin-transform-runtime']
  };
  