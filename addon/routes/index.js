import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route.extend(DataTableRouteMixin) {
  @service intl;
  @service store;

  modelName = 'job';

  beforeModel() {
    // Simply accessing the service works around this issue: https://github.com/ember-intl/ember-intl/issues/1826
    // We do it in the engine code, so apps aren't forced to do it when they might not even be using ember-intl.
    // TODO: remove this once the issue is fixed upstream
    this.intl;
  }

  mergeQueryOptions(param) {
    const query = {
      sort: param.sort,
    };

    if (param.creatorValue) {
      query['filter[creator]'] = param.creatorValue;
    }

    if (param.operationValue) {
      query['filter[operation]'] = param.operationValue;
    }

    return query;
  }
}
