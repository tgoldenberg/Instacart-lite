## Instacart Lite

#### Getting Started

To install dependencies, run the following:

```
npm install
```

After the dependencies are installed, you can run locally:

```
npm run dev
```

#### Structure

This application relies on the JavaScript web framework NextJS.

NextJS uses the file system as an API. Thus, all files contained in `pages` are urls, corresponding to their name.

For example, `pages/index.js` maps to "/". `pages/apply.js` maps to "/apply.";

For styling, the library `material-ui` was used, along with application of Flexbox principles. The styles are contained in the `.scss` file `styles/landing.scss`;

NextJS uses Webpack to bundle styles and client code together. Some unique components that it utilizes are the `Head`, `Link`, and `Router` APIs.

NextJS top-level components also utilize a `getInitialProps` API which works on both client and server side.

This application utilizes Cookies for both client- and server-side user sessions.
