module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['features/support/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: ['progress']
  }
};