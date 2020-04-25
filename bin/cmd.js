#!/usr/bin/env node

var quote = require('../');
var fs = require('fs');

var argv = process.argv.slice(2);
if (argv.indexOf("--help") > -1 || argv.indexOf("--h") > -1) {
    var s = fs.createReadStream(__dirname + '/usage.txt');
    return s.pipe(process.stdout);
}

process.stdin.pipe(quote()).pipe(process.stdout);
