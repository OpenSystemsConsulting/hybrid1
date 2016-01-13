'use strict';

//var bunyan = require('bunyan');

// load lbclient via browserify's require
var client = (function() {

  /*global require:true*/
  return require('lbclient');
})();

angular.module('starter')
  .value('Job', client.models.LocalJob)
  .value('RemoteJob', client.models.Job)
  .value('sync', client.sync)
  .value('network', client.network)
  .value('fullreplication', client.fullreplication)
  .value('syncstatus', client.syncstatus)
  .value('clientlog', client.clientlog)
  .value('deleteChangeData', client.deleteChangeData)
;
