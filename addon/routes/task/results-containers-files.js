import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import { inject as service } from '@ember/service';

export default class TaskResultRoute extends Route.extend(DataTableRouteMixin) {
  @service store;
  modelName = 'data-container';

  async beforeModel() {
    this.taskId = await this.modelFor('task').id;
  }

  mergeQueryOptions(param) {
    return {
      'filter[result-from-tasks][:id:]': this.taskId,
      sort: param.sort,
    };
  }
}
