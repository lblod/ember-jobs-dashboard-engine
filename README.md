ember-jobs-dashboard-engine
==============================================================================

The ember-jobs-dashboard-engine is the engine version of [frontend-harvesting-self-service](https://github.com/lblod/frontend-harvesting-self-service). This engine is created to be easily mounted to existing frontends. The [LBLOD dashboard](https://github.com/lblod/frontend-dashboard) is one example of a frontend using this engine.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install @lblod/ember-jobs-dashboard-engine
```


Usage
------------------------------------------------------------------------------

## Dependencies

To mount this engine to a frontend you will first need to make sure that all dependencies are synced. This means that all dependencies that you can find in this repo's packages.json need to be the same version in the host app. Also the host app needs to be upgraded to ember-cli 3.24.0 if it is not already.
<br> 

Besides that you will need to install the ember-engines package in the host app. This also has to be the same version as the one you can find in this repo's package.json

## Mounting

To mount the engine into your app you have to navigate to the host app's router.js file and add the following line under Router.map:
```
Router.map(function() {
  this.mount('@lblod/ember-jobs-dashboard-engine', { path: "jobs" });
  ...
```
after this the engine's /index route will be available in the host /jobs route. 

## Service

The engine relies on the store service for authentication & authorization. The is normally handles by the host app. To make the store service accessible to the jobs-dashboard-engine we need to add the following snippet to the host's app.js file
```
  Resolver = Resolver;

  engines = {
    "@lblod/ember-jobs-dashboard-engine": {
      dependencies: {
        services: [
          'store'
        ]
      }
    }
  }
 
  ....
```

## Models

You will find all jobs-dashboard related models in this repo's models folder. The have to be added to the host's models folder. The reason this has to be done manually is to prevent potential unwanted side effect when including this automatically.

After adding the models files you will need to add the following rules to the host app its `app/models/custom-inflector-rules.js` file:
```
inflector.irregular('job', 'jobs');
inflector.irregular('task', 'tasks');
inflector.irregular('remote-data-object', 'remote-data-objects');
```

## Backend

Since we included model files you most likely already know that the backend will also need additions too. Assuming a semantic.works stack you will need to add additional resource defintions in the config/resource folder. You can find the required definitions here: [resources-files](https://github.com/lblod/app-lblod-harvester/tree/master/config/resources). You can also find an example of authorization management for these resources in the config/authorization folder of that same repo.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
