# Booktracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Resolvers

used to fetch data before navigation to route,

prevent presentation of empty component,

prevent routing component with errors,

provide better user experience

better to use it if whole route depends on single request, because it is not good to hold the whole route because just 1 request is taking time

## Interceptors

Implements HTTPInterceptor interface

Manipulate HTTP requests before they're sent to the server

Manipulate HTTP responses before they're returned to your app

uses::Adding headers to all requests,Logging,reporting progress events,client-side caching

## Caching HTTP Requests with Interceptors

Reduced network utilization,
Reduced load on backends,
improved responsiveness of the end user

## testing

npm test
