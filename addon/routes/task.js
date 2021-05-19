import Route from '@ember/routing/route';

export default class TaskRoute extends Route {

  model(param){
    return this.store.findRecord('task', param.id);
  }
}
