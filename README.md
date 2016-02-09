# tfy

Simple thenify wrapper with context binding. See [thenify](https://github.com/thenables/thenify) for more documentation

```javascript
'use strict';

let co = require('co');
let tfy = require('tfy');
let thenify = require('thenify');

function Foo () { this.name = 'bar'; }
Foo.prototype.getName = function (cb) { cb(null, this.name); }

co(function *() {
  let foo = new Foo();
  let thenified;
  let result;

  result = yield thenify(foo.getName)(); // thenified and context not bound
  console.log(result); // undefined

  result = yield tfy(foo.getName)(); // thenified and context not bound
  console.log(result); // undefined

  result = yield tfy(foo.getName, foo); // thenified, and context bound
  console.log(result) // 'bar'

}).catch((e) => { console.log(e.stack); });
```
