[![Build Status](https://travis-ci.org/weiway/node-serialport-worker.svg?branch=master)](https://travis-ci.org/weiway/node-serialport-worker)
[![Dependency Status](https://david-dm.org/weiway/node-serialport-worker.svg)](https://david-dm.org/weiway/node-serialport-worker)

## Node-Serialport-Worker ##

### Run Node-serialport in a separate thread!###

Electron + SerialPort = better IOT

### Usage ###
Use serial worker just like the original node-serialport

```
const SerialPort = require('serialport-worker');
var serialport = new SerialPort(path, options);

serialport.on('data',(data)=>{
  console.log(data);
});
```

###Known Issue###
Please Help

For ```serialport``` API https://github.com/voodootikigod/node-serialport


###Dev Plan###
Currently tests are copied from node-serialport ( https://github.com/voodootikigod/node-serialport ), in the future, hope serialport worker will pass all serialport tests
