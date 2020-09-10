# first-group-ui

first group ui-framework


## Setup and Build

Setup

```bash
# install dependencies
npm i
# or
npm install
```

Development

```bash
# serve with hot reload at localhost:8081
# default theme blue
npm run dev
# theme red
npm run red
```

Build

```bash
# build all theme
npm run build

# theme blue only
npm run build:blue

# theme red only
npm run build:red
```

## Usage

```javascript
import Vue from 'vue'
// js
import FirstGroupUI from 'first-group-ui'
// css
import 'first-group-ui/dist/index.red.css'

Vue.use(FirstGroupUI, {
  theme: 'red'
})
```

|theme|js file|css file|
|:--|:--|:--|
|blue|first-group-ui/dist/index.js|first-group-ui/dist/index.blue.css|
|red|first-group-ui/dist/index.js|first-group-ui/dist/index.red.css|

### Use in nuxt.js

nuxt.config.js

```javascript
{
  css: [
    'first-group-ui/dist/index.red.css'
  ],
  styleResources: {
    scss: [
      'first-group-ui/dist/red.scss'
    ]
  },
  plugins: [
    { src: '~/plugins/first-group-ui.js', ssr: false }
  ]
}
```

/plugins/first-group-ui.js

```javascript
import Vue from 'vue'
import FirstGroupUI from 'first-group-ui'

Vue.use(FirstGroupUI, {
  theme: 'red'
})
```

## Document

deploy

```bash
# nginx servers config
# The HTTPS and H2 protocol configuration has been omitted
{
  listen 80;
  server_name ui.domain.com;

  location / {
    # htmlファイルのフォルダー
    root /first-group-ui/dist;
  }
}
```

