import Controller from '@ember/controller';

export default class IndexController extends Controller {
  page = 0;
  sort = '-created';
  size = 15;
}
