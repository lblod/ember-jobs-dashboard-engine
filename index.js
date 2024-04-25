const { buildEngine } = require('ember-engines/lib/engine-addon');
const engineOptions = {
  name: require('./package.json').name,
};

try {
  const asyncArrowTaskTransformPlugin = require.resolve(
    // TODO, remove this rule disable once we only support ember-concurrency v4+
    // eslint-disable-next-line n/no-missing-require
    'ember-concurrency/async-arrow-task-transform'
  );
  engineOptions.babel = {
    plugins: [asyncArrowTaskTransformPlugin],
  };
} catch (error) {
  // The require failed, so we are on an older ember-concurrency version which registers the plugin itself.
}

module.exports = buildEngine(engineOptions);
