import Model, { attr } from '@ember-data/model';

export default class OperationModel extends Model {
  @attr uri;
  @attr label;
  @attr comment;
}
