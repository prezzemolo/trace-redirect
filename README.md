trace-redirect [![][mit-badge]][mit] [![][travis-badge]][travis] [![][greenkeeper-badge]][greenkeeper]
=====
trace where redirects end up.

Installation
-----
```
npm install trace-redirect
```

Usage
-----
```
tracer(url)
```

### Return
Promise object. includes url that resolved.

Examples
-----

### Node.js
```js
const tracer = require('trace-redirect').default;
const result = await tracer("https://goo.gl/0PcY3k");
console.log(result);

/* 
'https://github.com/prezzemolo/trace-redirect'
*/
```

### TypeScript
```ts
import tracer from 'trace-redirect';
const result = await tracer("https://goo.gl/0PcY3k");
console.log(result);

/* 
'https://github.com/prezzemolo/trace-redirect'
*/
```


License
-----
The MIT License. See [LICENSE](LICENSE).

[mit]: http://opensource.org/licenses/MIT
[mit-badge]:https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[travis]: https://travis-ci.org/prezzemolo/trace-redirect
[travis-badge]: https://travis-ci.org/prezzemolo/trace-redirect.svg?branch=master
[greenkeeper]: https://greenkeeper.io/
[greenkeeper-badge]: https://badges.greenkeeper.io/prezzemolo/trace-redirect.svg
