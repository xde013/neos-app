# Neo App

  

A Test project using React focused on performance and scalability showcasing Near Earth Objects data provided by NASA.

  

## Tech Stack

An overview list of libraries used in this project (see a complete list of the dependencies in package.json).

  

### Core

  

- [ ] [React](https://facebook.github.io/react/)

- [ ] [React Router](https://github.com/ReactTraining/react-router)

- [ ] [Redux](http://redux.js.org/)

- [ ] [Redux Saga](https://redux-saga.github.io/redux-saga/)

- [ ] [Reselect](https://github.com/reactjs/reselect)

- [ ] [Immer](https://github.com/mweststrate/immer)


### Unit Testing

  
- [ ] [Jest](http://facebook.github.io/jest/)

- [ ] [react-testing-library](https://github.com/kentcdodds/react-testing-library)

  

### Linting

  

- [ ] [ESLint](http://eslint.org/)

- [ ] [Prettier](https://prettier.io/)

- [ ] [stylelint](https://stylelint.io/)

  

### Other

-  [`sanitize.css`]()

  

## Project Structure

To better understand the project structure:

- Core app is in the `app` folder.

- Configuration, and the rest are in the `internals` folder.

- The `server` folder contains development and production server configuration files.

  

### `app/`

  

This is project follows the [container/component architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4rmjqneiw). `containers/` contains React components which are connected to the redux store. `components/` contains dumb React components which depend on containers for data.

  

### `internals/`

This represent the engine of the app. Namely:

-  `internals/webpack`: webpack configuration taking care of bundling up the projects code.

  

### `server/`

this folder contains development and production server configuration.

  

### Boot up the project

This project serves the main enrty file ( index.html ). Webpack will pack the app into small javascript files. These files will be injected into the `index.html` as `<script>` tags.

  

### `app/app.js`:

  

`npm start` starts a server in your terminal for development. You can then visit [http://localhost:3000](http://localhost:3000).

app/app.js contains the following:

-  `@babel/polyfill` is imported. This enables cool stuff like generator functions, `Promise`s, etc.

- A `history` object is created, which remembers all the browsing history for the app. This is used by the ConnectedRouter.

- A redux `store` is instantiated.

-  `ReactDOM.render()` not only renders the [root react component](https://github.com/react-boilerplate/react-boilerplate/blob/master/app/containers/App/index.js) called `<App />`, of the app, but it renders it with `<Provider />` and `<ConnectedRouter />`.

- Hot module replacement is set up via vanilla [Webpack HMR](https://webpack.js.org/guides/hot-module-replacement/) that makes all the reducers, injected sagas, components, containers hot reloadable.

- Offline plugin support.

-  [offline-first](https://developers.google.com/web/fundamentals/getting-started/codelabs/offline/).

*  `<Provider />` makes the connection with the redux `store`.

 

## Server

### Development

  

Starts the development serve at `localhost:3000`. Changes in the application code will be hot-reloaded.

  

```Shell

npm start

```

  

### Production

The app is built for optimal performance: assets are minified and served gzipped.

  

```Shell

npm run start:production

```

- Runs tests (see `npm test`)

- Builds your app (see `npm run build`)

- Starts the production server (see `npm run start:prod`)

  

## Building

Preps the project for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

  

```Shell

npm run build

```

  

## Testing

 

## Unit testing

  

Launch Tests with the unit tests specified in the `**/tests/*.js` files

throughout the project.

 

```Shell

npm test

```

  





> Coded with 💖 by [Ryan Bourhil](https://github.com/xde013)

