module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 下面是对部分默认规则的调整
    "indent": "off", // 强制使用一致的缩进
    "comma-dangle": "off", // 要求或禁止末尾逗号
    "object-curly-spacing": "off", // 强制在大括号中使用一致的空格
    "object-curly-newline": "off", // 强制大括号内换行符的一致性
    "semi": "off", // 要求或禁止使用分号代替 ASI
    "quotes": "off", // 强制使用一致的反勾号、双引号或单引号
    "no-multiple-empty-lines": "off", // 禁止出现多行空行
    "no-trailing-spaces": "off", // 禁用行尾空格
    "space-before-function-paren": "off", // 要求函数圆括号之前有一个空格
  }
}
