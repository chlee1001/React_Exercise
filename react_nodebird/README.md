npm i next@9

npm i eslint -D

npm i eslint-plugin-import -D

npm i eslint-plugin-react -D

npm i eslint-plugin-react-hooks -D

.eslintrc

`{

"parserOptions": {

"ecmaVersion": 2020,

"sourceType": "module",

"ecmaFeatures": {

"jsx": true

}

},

"env": {

"browser": true,

"node": true,

"es6": true

},

"extends": ["eslint:recommended", "plugin:react/recommended"],

"plugins": ["import", "react-hooks"],

"rules": []

}`

antd
styled components (emotion)

class <-> hooks
