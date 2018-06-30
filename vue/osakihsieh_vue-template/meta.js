module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "專案名稱"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "專案描述",
      "default": "新專案"
    },
    "start_version": {
      "type": "Number",
      "required": false,
      "message": "起始版本號",
      "default": "0.1.0"
    },
    "author": {
      "type": "string",
      "required": false,
      "message": "作者"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "安裝 vue-router?"
    },
    "vuex": {
      "type": "confirm",
      "message": "安裝 Vuex?"
    },
    "needGulp": {
      "type": "confirm",
      "message": "要安裝 Gulp#4.0 嗎?"
    },
    "globalStyle": {
      "when": "needGulp",
      "type": "confirm",
      "message": "使用全域 CSS?"
    },
    "cssReset": {
      "when": "needGulp && globalStyle",
      "type": "confirm",
      "message": "使用 CSS RESET? \r\n(需使用 Gulp)"
    },
    "relativePath": {
      "type": "confirm",
      "message": "使用相對路徑?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "AirBNB (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "AirBNB"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "gulpfile.js": "needGulp",
    "scss/style.scss": "needGulp",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router",
    "scss/style.scss": "needGulp && globalStyle"
  },
  "completeMessage": "準備完成，請依以下步驟初始化專案:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
};