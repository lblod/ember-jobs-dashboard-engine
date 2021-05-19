import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route.extend(DataTableRouteMixin) {
  @service() store;
  modelName = 'job';

  mergeQueryOptions(param) {
    return {
      sort: param.sort
    };
  }
}

