import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import { service } from '@ember/service';

export default class TaskInputContainersHarvestingCollectionsRoute extends Route.extend(
  DataTableRouteMixin
) {
  @service store;
  modelName = 'remote-data-object';

  async beforeModel() {
    this.taskId = await this.modelFor('task').id;
  }

  mergeQueryOptions(param) {
    return {
      'filter[harvesting-collection][data-container][input-from-tasks][:id:]':
        this.taskId,
      sort: param.sort,
    };
  }
}
