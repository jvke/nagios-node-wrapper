'use strict';

(function() {

  var nagios = function() {
    this.opts = process.argv;
  }

  module.exports = nagios;

  nagios.prototype.states = {
    'OK': 0,
    'WARNING': 1,
    'CRITICAL': 2,
    'UNKNOWN': 3
  };

  nagios.prototype.getStateName = function(val) {
    if (typeof val === 'number') {
      var keys = Object.keys(this.states);
      return keys[val];
    } else {
      return 'Error: value was:', typeof val;
    }
  };

  nagios.prototype.exit = function(state, msg) {
    if (msg === null || msg === undefined) {
      msg = this.getStateName(state);
    } else if (state === null || state === undefined) {
      state = 'Error: state was an unexpected value';
    }
    console.log(state, msg);
    process.exit(state);
  };

})();
