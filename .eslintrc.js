module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // React のimport不要
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }], // JSX にtsx拡張子を追加
    'react-hooks/exhaustive-deps': 'off', // hooks 依存キー制約を無視
    '@typescript-eslint/no-use-before-define': 'off', // 関数の定義前実行を許可
    '@typescript-eslint/no-explicit-any': 'error', // any 使用不可
    'no-console': ['error', { allow: ['warn', 'error'] }], // console 使用不可
  },
}
