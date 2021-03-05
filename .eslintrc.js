module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: "./tsconfig.json"
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5",
        "printWidth": 100
      }
    ],
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/static-property-placement': 0,
    'jsx-a11y/alt-text': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'jsx-a11y/anchor-is-valid': 0,
  }
};
