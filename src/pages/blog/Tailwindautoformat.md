---
layout: ../../layouts/Post.astro
title: "Tailwind autoformat"
publishDate: "July 16 2024"
description: "Easily formatting Tailwind classes"
image: "/assets/tailwind.jpg"
alt: 
---



This is the setup that I use for Autovista, but it's mostly "stock", easy to modify and look-up.
Don’t skip the regular local install! Editor plugins will pick up your local version of Prettier, making sure you use the correct version in every project. (You wouldn’t want your editor accidentally causing lots of changes because it’s using a newer version of Prettier than your project!)
And being able to run Prettier from the command line is still a good fallback, and needed for CI setups.


---

## VSCode Prettier extension


Install VSCode Prettier extension:

`ext install esbenp.prettier-vscode`

<https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

If a local configuration file cannot be found the plugin will fallback to the default Tailwind configuration.

---

## Install prettier cli plugin

**[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)**

To get started, install `prettier-plugin-tailwindcss` as a dev-dependency:

```bash
yarn add --dev prettier prettier-plugin-tailwindcss 
npm install -D prettier prettier-plugin-tailwindcss

```

Then add the plugin to your Prettier config (If it doesn't exist, create the new file in the root folder):

```javascript
// prettier.config.js Guillermo
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}
```

---

## Customizing your Tailwind config path

By default the plugin will look for this file in the same directory as your Prettier configuration file. However, if your Tailwind configuration is somewhere else, you can specify this using the `tailwindConfig` option in your Prettier configuration.

Note that paths are resolved relative to the Prettier configuration file.

```javascript
// prettier.config.js Guillermo
module.exports = {
  tailwindConfig: './tailwind.config.js',
   tailwindAttributes: ['className'],
}
```
If a local configuration file cannot be found the plugin will fallback to the default Tailwind configuration.



---

## Sorting classes in function calls

In addition to sorting classes in attributes, you can also sort classes in strings provided to function calls. This is useful when working with libraries like [clsx](https://github.com/lukeed/clsx) or [cva](https://cva.style/).

You can sort classes in function calls using the `tailwindFunctions` option, which takes a list of function names:

```javascript
// prettier.config.js autovista

module.exports = {

tailwindConfig: './tailwind.config.js',

tailwindAttributes: ['className'],

}
```

## Compatibility with other Prettier plugins and a few notes

One limitation with this approach is that `prettier-plugin-tailwindcss` _must_ be loaded last.

Tailwind example:

```json
// .prettierrc
{
  // ..
  "plugins": [
    "prettier-plugin-tailwindcss" // MUST come last
  ]
}
```

My file (autovista):

``` json
/// .prettierrc.json autovista which is needed to make it work.
{
  "trailingComma": "es5",
  "semi": true,
  "tabWidth": 2,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "plugins": ["prettier-plugin-tailwindcss"],
  "pluginSearchDirs": false

}
```

My ESLintrc.json configuration

```json

/// eSlintrc.json autovista which is needed to make it work.
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["next", "prettier"],
    "parserOptions": {"ecmaVersion": "latest"},"rules": {}
    }
```

---

## Configuration for Visual Studio Code

1. [CTRL SHIFT + P]
2. Format with....
3. Select `Configure Default Formatter`
4. Select `Prettier`

---
