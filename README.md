# This project is not actively maintained

Issues and pull requests on this repository may not be acted on in a timely
manner, or at all.  You are of course welcome to use it anyway. You are even
more welcome to fork it and maintain the results.

![Unmaintained](https://nym.se/img/unmaintained.jpg)

inpath
======

[![build status](https://secure.travis-ci.org/calmh/node-inpath.png)](http://travis-ci.org/calmh/node-inpath)

Find an executable in the `$PATH`.

Example
-------

    var inpathSync = require('inpath').sync;
    
    var env = inpathSync('env');
    console.log(env); // => /usr/bin/env
    
    var none = inpathSync('4A87553D-6BAC-42EE-A699-BAF7830E453A');
    console.log(none); // => null

License
-------

MIT

