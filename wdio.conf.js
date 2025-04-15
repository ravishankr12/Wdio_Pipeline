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
  hostname: "localhost",
  // port: 4723,
  // path: "/wd/hub",
  capabilities: [
    {
      "platformName": "Android",
      "appium:deviceName": "Pixel_9",
      "appium:platformVersion": "16.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": "bs://e1525b5769965b14339587d93ed9b49b95e3f532",
      // "appium:appWaitActivity": "*",
      "appium:autoGrantPermissions": true,
      // "appium:noReset": true,
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