## Description

This Application is a simple realtime Twitter timeline renderer web application. When you first visit the Home page it will show all the latest tweet by a specific user. The live stream option is a page that will continously pull tweets with a specific fillter. 

## How to Run this App

1. Clone this repo
2. add .env file to the root project directory with the following keys:
   TWITTER_CONSUMER_KEY=<<CONSUMER_KEY>>
   TWITTER_CONSUMER_SECRET=<<CONSUMER_SECRET>>
   TWITTER_ACCESS_TOKEN_KEY=<<ACCESS_TOKEN>>
   TWITTER_ACCESS_TOKEN_SECRET=<<ACCESS_SECRET>>
3. In a terminal window cd src/server and run:
   ### `npm install`
   ### `node server.js`
4. In a different terminal window run:
   ### `npm start`
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
