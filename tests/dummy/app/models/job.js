import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class JobModel extends Model {
  @attr uri;
  @attr('date') created;
  @attr('date') modified;

  @belongsTo('status') status;
  @belongsTo('service') creator;
  @belongsTo('operation') operation;
  @belongsTo('job-error') error;
  @hasMany('task') tasks;
}
