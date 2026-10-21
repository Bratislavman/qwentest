import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "src/tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:5173",
    supportFile: false,
    setupNodeEvents(on) {
      on("before:browser:launch", (browser, launchOptions) => {
        // Для обычного Chrome/Edge
        if (browser.family === "chromium" && browser.name !== "electron") {
          launchOptions.args.push("--no-sandbox", "--disable-setuid-sandbox");
        }

        // Для встроенного браузера Electron
        if (browser.name === "electron") {
          launchOptions.preferences.webPreferences.sandbox = false;
        }

        return launchOptions;
      });
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});
