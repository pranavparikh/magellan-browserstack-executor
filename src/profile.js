import _ from "lodash";
import { argv } from "yargs";
import logger from "./logger";

export default {
  getNightwatchConfig: (profile, browserstackSettings) => {
    const capabilities = _.assign({}, profile.desiredCapabilities);

    capabilities["browserstack.user"] = browserstackSettings.user;
    capabilities["browserstack.key"] = browserstackSettings.key;

    if (browserstackSettings.useTunnels) {
      capabilities["browserstack.local"] = true;
      capabilities["browserstack.localIdentifier"] = browserstackSettings.localIdentifier;
    }
    const config = {
      desiredCapabilities: capabilities
    };

    logger.debug(`executor config: ${JSON.stringify(config)}`);
    return config;
  },

  getProfiles: (opts, argvMock = null) => {
    let runArgv = argv;

    if (argvMock) {
      runArgv = argvMock;
    }

    return new Promise((resolve) => {
      const desiredCapabilities = {
        "browserName": "Chrome",
        "browser_version": "56.0",
        "os": "OS X",
        "os_version": "Sierra",
        "resolution": "1280x1024"
      };
      if (runArgv.bs_browser
        || runArgv.bs_browsers) {
        resolve({
          desiredCapabilities,
          executor: "browserstack",
          nightwatchEnv: "browserstack",
          id: "browserstack_firefox_51"
        });
      } else {
        resolve();
      }
    });

    // return SauceBrowsers
    //   .initialize()
    //   .then(() => {
    //     return new Promise((resolve) => {
    //       if (runArgv.sauce_browser) {
    //         const p = {
    //           desiredCapabilities: SauceBrowsers.get({
    //             id: runArgv.sauce_browser
    //           })[0],
    //           executor: "sauce",
    //           nightwatchEnv: "sauce",
    //           id: runArgv.sauce_browser
    //         };

    //         logger.debug(`detected profile: ${JSON.stringify(p)}`);

    //         resolve(p);
    //       } else if (runArgv.sauce_browsers) {
    //         const tempBrowsers = runArgv.sauce_browsers.split(",");
    //         const returnBrowsers = [];

    //         _.forEach(tempBrowsers, (browser) => {
    //           const b = browser.trim();
    //           const p = {
    //             desiredCapabilities: SauceBrowsers.get({
    //               id: b
    //             })[0],
    //             executor: "sauce",
    //             nightwatchEnv: "sauce",
    //             // id is for magellan reporter
    //             id: b
    //           };

    //           returnBrowsers.push(p);
    //         });

    //         logger.debug(`detected profiles: ${JSON.stringify(returnBrowsers)}`);

    //         resolve(returnBrowsers);
    //       } else {
    //         resolve();
    //       }
    //     });
    //   });
  },

  /*eslint-disable no-unused-vars*/
  getCapabilities: (profile, opts) => {
    // profile key mapping
    // browser => id
    // resolution => screenResolution
    // orientation => deviceOrientation
    // const prof = {
    //   id: profile.browser
    // };

    // if (profile.resolution) {
    //   prof.screenResolution = profile.resolution;
    // }

    // if (profile.orientation) {
    //   prof.deviceOrientation = profile.orientation;
    // }

    // return SauceBrowsers
    //   .initialize()
    //   .then(() => {
    //     return new Promise((resolve, reject) => {
    //       try {
    //         const desiredCapabilities = SauceBrowsers.get(prof)[0];
    //         // add executor info back to capabilities
    //         const p = {
    //           desiredCapabilities,
    //           executor: profile.executor,
    //           nightwatchEnv: profile.executor,
    //           id: prof.id
    //         };

    //         resolve(p);
    //       } catch (e) {
    //         reject(`Executor sauce cannot resolve profile ${
    //           profile}`);
    //       }
    //     });
    //   });

    return new Promise((resolve) => {
      const desiredCapabilities = {
        "browserName": "Chrome",
        "browser_version": "56.0",
        "os": "OS X",
        "os_version": "Sierra",
        "resolution": "1280x1024"
      };

      resolve({
        desiredCapabilities,
        executor: "browserstack",
        nightwatchEnv: "browserstack",
        id: "browserstack_chrome_50"
      });
    });
  },

  listBrowsers: (opts, callback, argvMock = null) => {
    // let runArgv = argv;

    // if (argvMock) {
    //   runArgv = argvMock;
    // }

    // SauceBrowsers
    //   .initialize(true)
    //   .then(() => {
    //     return new Promise((resolve) => {
    //       if (runArgv.device_additions) {
    //         logger.log("Loading customized profiles");
    //         SauceBrowsers.addNormalizedBrowsersFromFile(runArgv.device_additions);
    //       }
    //       resolve();
    //     });
    //   })
    //   .then(() => {
    //     return new Promise((resolve) => {
    //       listSauceCliBrowsers((browserTable) => {
    //         // convert table heading
    //         browserTable.options.head[1] = "Copy-Paste Command-Line Option";
    //         logger.loghelp(browserTable.toString());
    //         logger.loghelp("");
    //         resolve(browserTable);
    //       });
    //     });
    //   })
    //   .then((browserTable) => {
    //     callback(null, browserTable);
    //   })
    //   .catch((err) => {
    //     logger.err(`Couldn't fetch sauce browsers. Error: ${err}`);
    //     logger.err(err.stack);
    //     callback(err);
    //   });
    callback(null, "browserstack fake");
  }
};
