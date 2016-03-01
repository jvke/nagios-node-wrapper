# nagios-node-wrapper
Simple wrapper for Nagios in NodeJS.

Usage
----
You can install via `$ npm install nagios-node-wrapper [--save-dev]`.
To use it in your plugins, simply `var Nagios = require('nagios-node-wrapper')` and `var n = new Nagios('HELLOWORLD');`. You can get a better understanding of how to write robust Nagios plugins using this annotated script: [demo.js](../blob/master/demo.js).

API
----
Note: this is likely to change, as more methods will be added (eg Perf Data, Thresholds). If any updates break the existing API, it will be explicitly documented on the versions page.

In this documentation, "n." should be replaced with the object's name you instantiated with `new Nagios()`.

#### n.opts
n.opts is a reference to the NodeJS method [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv), you can overwrite this with the NodeJS CLI module of your choice, eg:
```javascript
var cli = require('commander');
n.opts = cli.argv;
```

#### n.states
n.states is an associative array of all nagios states:
```javascript
{
  'OK': 0,
  'WARNING': 1,
  'CRITICAL': 2,
  'UNKNOWN': 3
}
```

#### n.getStateName(value)
Finds the state's key associated with value you pass as an argument. eg `n.getStateName(1) // => 'WARNING'`

#### n.exitMsg(state, msg)
Method for constructing Nagios-friendly exit messages. PerfData will be added here in future update.

#### n.exit(state, msg)
Use this to end your script and parse exit code to Nagios. Uses `n.exitMsg()` to construct exit message using n.opts, state and msg.
