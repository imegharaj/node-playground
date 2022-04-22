const path = require('path');
const nodeModule = require('./NodeModule')

// Testing Node Modules
nodeModule.inc();
nodeModule.inc();
nodeModule.dec();
nodeModule.inc();
nodeModule.dec();
nodeModule.inc();

console.log(nodeModule.getCount());

