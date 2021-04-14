# @actualsize/eslint-config

## About

This [ESLint](https://eslint.org/) config is built on top of [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb) and [Unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn). It includes [Prettier](https://prettier.io/) to automatically format code.

## Usage Instructions

1. Install `eslint` and this config in your project with `npm i -D eslint @actualsize/eslint-config` or `yarn add -D eslint @actualsize/eslint-config`

2. In your `.eslintrc.json` file, add one of the following to the `extends` array:

|   |   |
|---|---|
| Vanilla (default): | `"@actualsize/eslint-config"` |
| TypeScript without React : | `"@actualsize/eslint-config/configs/ts"` |
| React: | `"@actualsize/eslint-config/configs/react"` |
| TypeScript with React: | `"@actualsize/eslint-config/configs/ts-react"` |

That's it! All of the extended configs, Prettier, and some extra rule changes should just work out of the box.

---

## Example Usage

This should change depending on the project, but here's a good baseline for a vanilla project:

**.eslintrc**

```json
// .eslintrc.json
{
  "env": {
    "node": true,
    "browser": true,
    "es2020": true,
  },
  "extends": [
    "@actualsize/eslint-config"
  ],
}
```

---

### Typescript

If you're using TypeScript, add this to your `.eslintrc` too:

```json
// inside .eslintrc.json root object
"parserOptions": {
    "project": "./tsconfig.json"
}
```

As well as a **tsconfig.json** file at the root of the project:

**Node**

```json
// tsconfig.json
{
  "compilerOptions": {
    "lib": ["es2020"],
    "module": "commonjs",
    "target": "es2020",

    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "exclude": [
    "node_modules"
  ]
}
```

**Browser**

```json
// tsconfig.json
{
  "compilerOptions": {
    "lib": ["es2020", "dom"],
    "module": "commonjs",
    "target": "es6",
    
    "jsx": "react",
    
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "exclude": [
    "node_modules"
  ]
}
```

---

### Prettier

And don't forget your Prettier configs!

**.prettierrc**

```json
// .prettierrc
{
  "printWidth": 62,
  "tabWidth": 2,
  "useTabs": true,
  "semicolons": true,
  "singleQuote": false,
  "quoteProps": "consistent",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always"
}
```
