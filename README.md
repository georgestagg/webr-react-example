# Example of using webR in a React application.

This repo contains an example of using webR as part of a React application, originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

JavaScript source code showing an example of loading webR and using it in a page can be found in the file `src/App.js`.

A middleware proxy file, `src/setupProxy.js`, has been added to configure the app's Express instance so that the app is served with the recommended cross-origin isolation headers set. The same HTTP headers should be set on the hosting web server once the application has been build and deployed to production.

In addition, fallback worker scripts have been placed in the `public` folder so that if the page is not cross-origin isolated, webR will instead fall back to using a service worker for channel communication. Further information about cross-origin isolation and serving pages with webR can be found in the [webR documentation](https://docs.r-wasm.org/webr/latest/serving.html).

## Getting started

* Clone this repo and `cd` into the new directory.
* Install the required JavaScript libraries: `npm install`.
* Run the development server: `npm start`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
