import Model, { attr } from '@ember-data/model';

export default class ServiceModel extends Model {
  @attr uri;
  @attr label;
  @attr comment;
}
