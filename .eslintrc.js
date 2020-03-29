module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  plugins: ["react", "prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", "jsx"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "jsx-a11y/href-no-hash": ["off"],
    "no-console": [
      1,
      {
        allow: ["warn", "error"],
      },
    ],
    "max-len": ["error", { code: 120 }],
    "no-else-return": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
