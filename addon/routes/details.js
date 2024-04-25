import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DetailsRoute extends Route {
  @service() store;

  model(param) {
    return this.store.findRecord('job', param.id);
  }
}
