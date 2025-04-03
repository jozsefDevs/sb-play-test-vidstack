# Showcasing problem

Repo just created to showcase problem with Storybook's play function with Vidstack Player and with native HTML5 Video Player, see stories inside src

## Install

`pnpm i`

## Test

`pnpm test:sb`

What you'll see is that the native HTML5 player will execute through vitest + playwright and works well after this command ran. However the Vidstack player will throw an error for the same command,

```
PrettyFormatPluginError: this.$state[prop2] is not a function
 ❯ Object.get node_modules/.pnpm/@vidstack+react@1.12.13_@types+react@19.1.0_react@19.1.0/node_modules/@vidstack/react/dev/chunks/vidstack-D_bWd66h.js:709:46
 ❯ Object.test node_modules/.pnpm/@vitest+pretty-format@3.1.1/node_modules/@vitest/pretty-format/dist/index.js:1044:33
```

Also if you check these tests running through real browser with `pnpm storybook` they're both executing fine.
