# recreation of extends error when dependency is local workspace

When running `npm start` or `npm run build:preview` in this project, it produces console [message](#message) below

`@some-local/config` is from a node workspace in same repo found in `./packages/config`

A workaround I do is [spreading](#solved-by-spreading) the config.

## nitro config content
```ts
import config from "@some-local/config";

/**
 * @see https://nitro.unjs.io/config
 */
export default defineNitroConfig({
  extends: config(),
});
```
## message

```
Cannot extend config from `{"devServer":{"watch":["./src/pages","./src/components"]},"serverAssets":[{"baseName":"pages","dir":"./src/pages"},{"baseName":"components","dir":"./src/components"}]}` in /Users/ayoayco/Projects/@ayoayco/nitro-extends-error-recreation
```

## solved by spreading

```ts
import config from "@some-local/config";

/**
 * @see https://nitro.unjs.io/config
 */
export default defineNitroConfig({
  ...config(),
});
