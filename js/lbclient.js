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
  .value('LocalBarcodeHist', client.models.LocalBarcodeHist)
  .value('RemoteBarcodeHist', client.models.RemoteBarcodeHist)
  .value('sync', client.sync)
  .value('barcode_sync', client.barcode_sync)
  .value('network', client.network)
  .value('fullreplication', client.fullreplication)
  .value('syncstatus', client.syncstatus)
  .value('clientlog', client.clientlog)
  .value('deleteChangeData', client.deleteChangeData)
  .value('dataSources', client.dataSources)
;
