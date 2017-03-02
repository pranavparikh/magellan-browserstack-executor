const executor = require("./lib/executor").default;
const configuration = require("./lib/configuration").default;
const profile = require("./lib/profile").default;
const help = require("./lib/help").default;

module.exports = {
  name: "testarmada-magellan-browserstack-executor",
  shortName: "browserstack",

  // from help
  help: help,

  getConfig: configuration.getConfig,
  validateConfig: configuration.validateConfig,

  getNightwatchConfig: profile.getNightwatchConfig,
  getProfiles: profile.getProfiles,
  getCapabilities: profile.getCapabilities,
  listBrowsers: profile.listBrowsers,

  setup: executor.setup,
  teardown: executor.teardown,
  stage: executor.stage,
  wrapup: executor.wrapup,
  execute: executor.execute
};
