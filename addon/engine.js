import Engine from '@ember/engine';

import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';
import config from 'ember-jobs-dashboard/config/environment';

const { modulePrefix } = config;

export default class EmberJobsDashboardEngine extends Engine {
  modulePrefix = modulePrefix;
  Resolver = Resolver;
}

loadInitializers(EmberJobsDashboardEngine, modulePrefix);

