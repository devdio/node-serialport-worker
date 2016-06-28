/*globals it describe*/
'use strict'

const Serial = require('../serialport.js')
// const Serial = require('serialport');
const SerialPort = Serial.SerialPort

var port
var path

const noTravis = false
// Testing Board : /dev/cu.usbserial-DA01LKGI

describe('Serial Worker', () => {
  describe('Serial.list', () => {
    it('should return a list of serialports asynchronously', (done) => {
      Serial.list((err, ports) => {
        if (err) {
          throw err
        } else {
          path = ports[0]
          done()
        }
      })
    })
  })

    /*
    describe('Constructor',()=>{
        it('should throw error when open error',(done)=>{
            try {
                let fake = new SerialPort('dev/nonexist',{});
            }finally {
                done();
            }
        });
    });
    */

  if (noTravis) {
    describe('SerialPort', () => {
      port = new SerialPort('/dev/cu.usbserial-DA01M0Q1', {}, false)

      describe('SerialPort.isOpen', () => {
        it('should return true when port is open', (done) => {
          port.open((err) => {
            port.isOpen((flag) => {
              if (flag) {
                done()
              }
            })
          })
        })

        it('should return false when port is closed', (done) => {
          port.close(() => {
            port.isOpen((flag) => {
              if (flag === false) {
                done()
              }
            })
          })
        })
      })

      describe('SerialPort.on:open', () => {
        it('should catch open event when port opened', (done) => {
          port.open()
          port.on('open', (err) => {
            if (!err) {
              done()
            }
          })
        })
      })

      describe('SerialPort.on:data', () => {
        it('should catch data event when data event fired', (done) => {
          port.on('data', (err, data) => {
            if (!err) {
              done()
            }
          })
        })
      })

      describe('SerialPort.on:close', () => {
        it('should catch close event when port is closed', () => {
          port.on('close', (err) => {
            if (!err) {
              done()
            }
          })
          port.close()
        })
      })
    })
  }
})
