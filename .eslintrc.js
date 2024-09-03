module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'comma-dangle': 'error', // 要求或禁止尾随逗号
    'no-unused-vars': 'off', // 禁止未使用的变量
    'quotes': ['error', 'single'], // 强制一致使用反引号、双引号或单引号
    'semi': ['error', 'always'], // 要求或禁止使用分号而不是 ASI
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }] // 在 function 定义左括号之前强制执行一致的间距
  }
};
