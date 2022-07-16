# Basic Todo App Using ReactJS and Firebase

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses Firebase as its backend.

## Running in development mode

Make sure node and npm are installed.

1. Run `npm install --location=global firebase@11.2.2` to install firebase tools
2. Run `npm install` in project root to install project dependencies.
3. Run `firebase emulators:start --debug --project demo-react-todo --export-on-exit --import ./localhost-firebase-data` in `<PROJECT_ROOT>/firebase` directory to start firebase emulator. Wait till it starts up.
4. Run `npm start` to start the app in Create React App's development mode. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.