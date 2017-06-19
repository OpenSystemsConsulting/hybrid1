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
  .value('deleteJobChangeData', client.deleteJobChangeData)
  .value('deleteJseaChangeData', client.deleteJseaChangeData)
  .value('dataSources', client.dataSources)
  .value('LocalJseaDriverAnswers', client.models.LocalJseaDriverAnswers)
  .value('jseaAnswers_sync', client.jseaAnswers_sync)
  .value('LocalNote',client.models.LocalNote)
  .value('job_note_sync',client.job_note_sync)
  .value('Installation',client.model.Installation)
;
