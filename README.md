trace-redirect [![][mit-badge]][mit] [![][travis-badge]][travis]
==========
trace where redirects end up.

Installation
----------
```
npm install trace-redirect
```

Usage
----------

#### on JavaScript
```js
const tracer = require('trace-redirect');

async function test () {
	const result = await tracer("https://t.co/5NYRQw5lRy");
	console.log(result);
}

test();

/* 
'http://www.nicovideo.jp/watch/sm7808731'
*/
```

#### on TypeScript
```ts
import tracer from 'trace-redirect';

const result = await tracer("https://t.co/5NYRQw5lRy");

console.log(result);

/* 
'http://www.nicovideo.jp/watch/sm7808731'
*/
```


License
----------
The MIT License. See [LICENSE](LICENSE).

[mit]: http://opensource.org/licenses/MIT
[mit-badge]:https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[travis]: https://travis-ci.org/prezzemolo/trace-redirect
[travis-badge]: https://travis-ci.org/prezzemolo/trace-redirect.svg?branch=master