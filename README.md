# Brick Next Pipes [![CI Status](https://github.com/easyops-cn/brick-next-pipes/workflows/CI/badge.svg?event=push)](https://github.com/easyops-cn/brick-next-pipes/actions?query=workflow%3ACI) [![Coverage Status](https://coveralls.io/repos/github/easyops-cn/brick-next-pipes/badge.svg)](https://coveralls.io/github/easyops-cn/brick-next-pipes)

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

There is the [Release Please Action](https://github.com/google-github-actions/release-please-action) to handle publishing. Just merge the relevant release-PR, no worries.

Tips: Use `feat: ...` or `fix: ...` as commit messages to match the rules of the Release Please Action.

<details>

Alternatively, publish manually:

```shell
npm run release
git push --follow-tags origin master
npm run build
npm publish
```

</details>

