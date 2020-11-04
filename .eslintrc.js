module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : 0,
    "semi": 0
  },
  globals: {
    $nuxt: true
  }
};
