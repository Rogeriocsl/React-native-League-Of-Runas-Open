module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "node": false,
  },
   
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "spread": true,
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
 
  "rules": {
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "react-native/no-unused-styles": 4,
    "react-native/split-platform-components": 4,
    "react-native/no-inline-styles": 4,
    "react-native/no-color-literals": 4   
  }, 
 
    
  
  "extends": ["eslint:recommended", "plugin:react/recommended"]
};
