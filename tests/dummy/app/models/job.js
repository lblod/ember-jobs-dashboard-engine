import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class JobModel extends Model {
  @attr uri;
  @attr status;
  @attr('date') created;
  @attr('date') modified;
  @attr creator;
  @attr operation;

  @belongsTo('job-error', { async: true, inverse: null }) error;
  @hasMany('task', { async: true, inverse: 'job' }) tasks;

  //TODO: move this later to a propery modeled skos:Conceptscheme from backend
  statusesMap = {
    'http://redpencil.data.gift/id/concept/JobStatus/busy': 'busy',
    'http://redpencil.data.gift/id/concept/JobStatus/scheduled': 'scheduled',
    'http://redpencil.data.gift/id/concept/JobStatus/success': 'success',
    'http://redpencil.data.gift/id/concept/JobStatus/failed': 'failed',
    'http://redpencil.data.gift/id/concept/JobStatus/canceled': 'canceled',
  };

  get shortStatus() {
    return this.statusesMap[this.status];
  }
}
