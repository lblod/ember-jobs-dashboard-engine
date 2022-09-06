import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import { inject as service } from '@ember/service';

export default class TaskInputRoute extends Route.extend(DataTableRouteMixin) {
  @service store;
  modelName = 'file';

  async beforeModel() {
    this.taskId = await this.modelFor('task').id;
  }

  mergeQueryOptions(param) {
    return {
      'filter[data-container][input-from-tasks][:id:]': this.taskId,
      sort: param.sort,
    };
  }
}
