import puppetteer from "puppeteer";
import { fork } from "child_process";

jest.setTimeout(30000); // default puppeteer timeout

describe("Credit Card Validator form", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: 'new', // show gui
      // slowMo: 25,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  test("should add do something", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".validator-form");
  });

  test("input valid test", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".validator-form");

    const validator = await page.$(".validator-form");
    const input = await validator.$(".validator-field");
    const submit = await validator.$(".validator-btn");

    await input.type("4024007182915552");
    await submit.click();

    await page.waitForSelector(".validator-form.valid");
  });

  test("input not-valid test", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".validator-form");

    const validator = await page.$(".validator-form");
    const input = await validator.$(".validator-field");
    const submit = await validator.$(".validator-btn");

    await input.type("402400718");
    await submit.click();

    await page.waitForSelector(".validator-form.not-valid");
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
});
