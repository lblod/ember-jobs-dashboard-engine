const { buildEngine } = require('ember-engines/lib/engine-addon');

module.exports = buildEngine({
  name: require('./package.json').name,
});
