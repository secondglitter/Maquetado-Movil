const Serialport = require("serialport").SerialPort;
const { DelimiterParser } = require("@serialport/parser-delimiter");

const port = new Serialport({
    path: '/dev/ttyUSB0',
    baudRate:9600
});

const parser = port.pipe(new DelimiterParser({ delimiter: '\n'}));

parser.on("open", function () {
    console.log("connection is opened")
});

parser.on("data", function (data) {
    var enc = new TextDecoder();
    var arr = new Uint8Array(data);
    ready = enc.decode(arr);
    console.log(ready)
});

parser.on("error", function (err) {
    console.log(err);
});


