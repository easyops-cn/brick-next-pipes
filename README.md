# Brick Next Pipes [![Build Status](https://travis-ci.com/easyops-cn/brick-next-pipes.svg?branch=master)](https://travis-ci.com/easyops-cn/brick-next-pipes) [![Coverage Status](https://coveralls.io/repos/github/easyops-cn/brick-next-pipes/badge.svg)](https://coveralls.io/github/easyops-cn/brick-next-pipes)

## Usage

```shell
npm install --save @easyops-cn/brick-next-pipes
```

```ts
import { pipes } from "@easyops-cn/brick-next-pipes";

const stringified = pipes.yamlStringify(yourObject);
```

## Documentation

https://easyops-cn.github.io/brick-next-pipes/brick-next-pipes.html

## Development

```shell
npm install
npm start
```

## Testing

```shell
npm test
```

## Publishing

There is the [Release Please](https://github.com/apps/release-please) bot to handle publishing. Just merge the relevant release-PR, no worries.

<details>

Alternatively, publish manually:

```shell
npm run release
git push --follow-tags origin master
npm run build
npm publish
```

</details>
