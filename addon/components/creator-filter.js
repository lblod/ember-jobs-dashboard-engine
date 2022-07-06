import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CreatorFilterComponent extends Component {
  @tracked value;

  @action
  onChange() {
    this.args.onChange(this.value);
  }
}
