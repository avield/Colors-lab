module.exports = [
  {
    ignores: ["node_modules/**"]
  },
  {
    files: ["public/js/code.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        alert: "readonly",
        XMLHttpRequest: "readonly",
        md5: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "off"
    }
  },
  {
    files: ["public/js/md5.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        module: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "off"
    }
  }
];