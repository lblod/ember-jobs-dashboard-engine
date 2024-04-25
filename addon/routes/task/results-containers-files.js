import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import { service } from '@ember/service';

export default class TaskResultRoute extends Route.extend(DataTableRouteMixin) {
  @service store;
  modelName = 'file';

  async beforeModel() {
    this.taskId = await this.modelFor('task').id;
  }

  mergeQueryOptions(param) {
    return {
      'filter[data-container][result-from-tasks][:id:]': this.taskId,
      sort: param.sort,
    };
  }
}
