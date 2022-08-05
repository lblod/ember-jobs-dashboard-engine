import Model, { attr } from '@ember-data/model';

export default class StatusModel extends Model {
  @attr uri;
  @attr label;
  @attr comment;

  get auSkin() {
    switch (this.label) {
      case 'Running':
        return 'ongoing';
      case 'Success':
        return 'success';
      case 'Failed':
        return 'error';
      case 'Scheduled':
        return 'default';
      default:
        return 'border';
    }
  }

  get auIcon() {
    switch (this.label) {
      case 'Running':
        return 'circle-step-3';
      case 'Success':
        return 'check';
      case 'Failed':
        return 'cross';
      case 'Scheduled':
        return 'calendar';
      default:
        return 'three-dots';
    }
  }
}
