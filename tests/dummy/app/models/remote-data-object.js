import Model, { attr, belongsTo } from '@ember-data/model';

export default class RemoteDataObjectModel extends Model {
  @attr uri;
  @attr source;
  @attr('date') created;
  @attr('date') modified;
  @attr status;
  @attr requestHeader;
  @attr creator;
  @belongsTo('file', { async: true, inverse: 'remoteDataObject' }) file;

  //TODO: move this later to a propery modeled skos:Conceptscheme
  statusesMap = {
    'http://lblod.data.gift/file-download-statuses/ready-to-be-cached':
      'ready-to-be-cached',
    'http://lblod.data.gift/file-download-statuses/success': 'success',
    'http://lblod.data.gift/file-download-statuses/succes': 'success', //TODO: find typo in backed
    'http://lblod.data.gift/file-download-statuses/collected': 'collected',
    'http://lblod.data.gift/file-download-statuses/failure': 'failure',
    'http://lblod.data.gift/file-download-statuses/ongoing': 'ongoing',
  };

  get downloadLink() {
    return `/files/${this.id}/download`;
  }

  get shortStatus() {
    return this.statusesMap[this.status];
  }
}
