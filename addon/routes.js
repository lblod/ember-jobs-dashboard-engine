import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('details', { path: '/:id' }, function(){
    this.route('index');
  });
  this.route('task', { path: '/task/:id' }, function(){
    this.route('input-containers-files');
    this.route('results-containers-files');
    this.route('input-containers-graph');
    this.route('results-containers-graph');
    this.route('input-containers-harvesting-collections');
  });
});

