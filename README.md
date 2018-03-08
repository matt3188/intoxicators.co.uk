# intoxicators.co.uk [![Build Status](https://travis-ci.org/matt3188/intoxicators.co.uk.svg?branch=master)](https://travis-ci.org/matt3188/intoxicators.co.uk)

Website built in react for the Intoxicators. A group of Car enthusiasts with a passion for pre 1960's hot Rods.

## Features

### AuthService

The library `auth0-lock` provides the user authentication, and I also have a `src/utils/AuthService/AuthService.js` module to wrap this Lock Widget usage and manage the localStorage items.

I'm using the latest Auth0 Lock 10 version in [popup mode](https://auth0.com/docs/libraries/lock/v11/authentication-modes#popup-mode), which means here's the flow:

* Login widget shows login panel
* Redirect to auth0 to check login creds (done in hidden iframe)
* Redirect back to localhost:3000/callback (done in hidden iframe)
* AuthService waits for 'authenticated' event to fire
* Redirects back to homepage

### Libraries

| Library                                                                   | Description                                                      |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [react](https://github.com/facebook/react)                                | Facebook's library for building user interfaces                  |
| [redux](https://github.com/rackt/redux)                                   | State container for JavaScript apps                              |
| [react-router](https://github.com/rackt/react-router)                     | Declarative routing for React apps using navigational components |
| [create-react-app](https://github.com/facebookincubator/create-react-app) | All tooling needed for react apps                                |

## Development

`create-react-app` takes care of tooling, development server, live reload, building, testing.

## Testing

`npm run lint` to check linting errors. This projects follows [`eslint-config-react-app`](https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app) style.

`npm test` to run all tests. This project uses jest to run tests, and [enzyme](https://github.com/airbnb/enzyme) for unit testing React components.
