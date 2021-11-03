module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
      parser: '@babel/eslint-parser',
      sourceType: "module",
      ecmaVersion: 8,
      requireConfigFile : false
    },
    rules: {
      'no-console': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      "vue/no-multiple-template-root": 0
    }
};
