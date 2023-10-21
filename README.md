# recreation of extends error when dependency is local workspace

The following nitro.config.ts content produces
```ts
import config from "@some-local/config";

/**
 * @see https://nitro.unjs.io/config
 */
export default defineNitroConfig({
  extends: config(),
});
```
