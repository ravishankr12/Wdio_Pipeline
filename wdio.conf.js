import path from "path";
import dotenv from "dotenv";
dotenv.config();

export const config = {
  // runner: "local",
  user: "ravishanker_jvX2ZU",
  key: "kqRrbsxx2WNJzhtyVget",
  specs: ["./test/specs/android/UI_E2E.spec.js"],
  exclude: [],
  maxInstances: 10,
  services: ["browserstack"],
  // hostname: "localhost",
  // port: 4723,
  // path: "/wd/hub",
  capabilities: [
    {
      "platformName": "Android",
      "appium:deviceName": "Google Pixel 9",
      "appium:platformVersion": "15.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": "bs://e1525b5769965b14339587d93ed9b49b95e3f532",
      "appium:autoGrantPermissions": true,
      "appium:appWaitActivity": "*",
      "bstack:options": {
        "projectName": "My Android E2E Tests",
        "buildName": "Build 1.0",
        "sessionName": "UI E2E Flow",
        "idleTimeout": 300
      }
    }
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};