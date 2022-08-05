import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr uri;
  @attr('date') created;
  @attr('date') modified;
  @attr index;

  @belongsTo('operation') operation;
  @belongsTo('status') status;
  @belongsTo('job-error') error;
  @belongsTo('job') job;

  @hasMany('task') parentTasks;

  //Due to lack of inheritance in mu-cl-resource, we directly link to file and collection, stuff we need here.
  @hasMany('data-container') resultsContainers;
  @hasMany('data-container') inputContainers;
}
