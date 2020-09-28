# First Group

> The cars Dashboard and Manager's front-end system.

![](./docs/img/system.png)

## Build Setup

#### Setup

```bash
# install dependencies
$ npm install
# or
$ npm i
```

#### Development

first_group

```bash
# serve with hot reload at localhost:3000
# dashboard
$ npm run dashboard
# or
$ npm run dev:d

# manager
$ npm run manager
# or
$ npm run dev:m

# console
$ npm run console
# or
$ npm run dev:c
```

run ui doc

```bash
# serve with hot reload at localhost:8081
# default theme blue
$ npm run ui
# theme red
$ npm run ui:red
```

#### Build and Launch server

```bash
# build for production
# dashboard and manager
$ npm run build
# dashboard only
$ npm run build:d
# manager only
$ npm run build:m
# console only
$ npm run build:c

# launch server dashboard, at localhost:3000
$ npm run start:d
# launch server manager, at localhost:3001
$ npm run start:m
# launch server console, at localhost:3002
$ npm run start:c
```

## nuxt.config

/build/config.{systemCode}.js

## Global properties

It's a custom global property of Vue

#### Properties

| property    | type    | remark                                                      |
| :---------- | :------ | :---------------------------------------------------------- |
| \$api | object | methods: `get/put/post/delete/upload` |
| \$colors | object | please check `first-group-ui` document for details |

#### Source

/plugins/global-manager-properties.js

## Documents

[docs](./docs)

[$api](./docs/$api.md)

[mock-data](./docs/mock-data.md)

[first-group-ui docs](./plugins/first-group-ui/docs)

#### Nuxt.js

https://nuxtjs.org/

#### Chart.js

https://www.chartjs.org/docs/latest/

#### Webpack

https://webpack.js.org/

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
