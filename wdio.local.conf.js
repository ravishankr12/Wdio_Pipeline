import path from "path";
import dotenv from "dotenv";
dotenv.config();

export const config = {
  runner: "local",

  specs: ["./test/specs/android/*.spec.js"],

  exclude: [],

  maxInstances: 2, // Run in parallel on two emulators

  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:deviceName": "emulator-5554", // First emulator
      "appium:platformVersion": "11.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(process.cwd(), "app/android/SauceLabs.apk"),
      "appium:autoGrantPermissions": true,
      "appium:appWaitActivity": "*",
    },
    {
      "appium:platformName": "Android",
      "appium:deviceName": "emulator-5556", // Second emulator
      "appium:platformVersion": "16.0", // Adjust to match your second emulator
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(process.cwd(), "app/android/SauceLabs.apk"),
      "appium:autoGrantPermissions": true,
      "appium:appWaitActivity": "*",
    }
  ],

  services: ["appium"],

  hostname: "localhost",
  port: 4723,
  path: "/wd/hub",

  logLevel: "info",

  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    "spec",
    ["allure", {
      outputDir: "allure-results",
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
