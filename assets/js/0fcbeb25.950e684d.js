"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[26820],{35173:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return g}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(26396),l=n(58215),s=["components"],p={id:"test-configuration",title:"Configuration"},c=void 0,u={unversionedId:"test-configuration",id:"version-1.17/test-configuration",isDocsHomePage:!1,title:"Configuration",description:"Playwright Test provides options to configure the default browser, context and page fixtures. For example there are options for headless, viewport and ignoreHTTPSErrors. You can also record a video or a trace for the test or capture a screenshot at the end.",source:"@site/versioned_docs/version-1.17/test-configuration.mdx",sourceDirName:".",slug:"/test-configuration",permalink:"/docs/1.17/test-configuration",tags:[],version:"1.17",frontMatter:{id:"test-configuration",title:"Configuration"},sidebar:"version-1.17/docs",previous:{title:"Command line",permalink:"/docs/1.17/test-cli"},next:{title:"Page Object Model",permalink:"/docs/1.17/test-pom"}},m=[{value:"Global configuration",id:"global-configuration",children:[],level:2},{value:"Local configuration",id:"local-configuration",children:[],level:2},{value:"Basic options",id:"basic-options",children:[],level:2},{value:"Multiple browsers",id:"multiple-browsers",children:[],level:2},{value:"Emulation",id:"emulation",children:[],level:2},{value:"Network",id:"network",children:[{value:"Network mocking",id:"network-mocking",children:[],level:3}],level:2},{value:"Automatic screenshots",id:"automatic-screenshots",children:[],level:2},{value:"Record video",id:"record-video",children:[],level:2},{value:"Record test trace",id:"record-test-trace",children:[],level:2},{value:"More browser and context options",id:"more-browser-and-context-options",children:[],level:2},{value:"Testing options",id:"testing-options",children:[],level:2}],d={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright Test provides options to configure the default ",(0,r.kt)("inlineCode",{parentName:"p"},"browser"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixtures. For example there are options for ",(0,r.kt)("inlineCode",{parentName:"p"},"headless"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"viewport")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreHTTPSErrors"),". You can also record a video or a trace for the test or capture a screenshot at the end."),(0,r.kt)("p",null,"Finally, there are plenty of testing options like ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"testDir")," that configure how your tests are collected and executed."),(0,r.kt)("p",null,"You can specify any options globally in the configuration file, and most of them locally in a test file."),(0,r.kt)("p",null,"See the full list of ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-testoptions",title:"TestOptions"},"test options")," and all ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-testconfig",title:"TestConfig"},"configuration properties"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#global-configuration"},"Global configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#local-configuration"},"Local configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#basic-options"},"Basic options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multiple-browsers"},"Multiple browsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#emulation"},"Emulation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#network"},"Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#automatic-screenshots"},"Automatic screenshots")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#record-video"},"Record video")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#record-test-trace"},"Record test trace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#more-browser-and-context-options"},"More browser and context options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing-options"},"Testing options"))),(0,r.kt)("h2",{id:"global-configuration"},"Global configuration"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright.config.js")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),") and specify options in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-testconfig#test-config-use"},"testConfig.use")," section."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    headless: false,\n    viewport: { width: 1280, height: 720 },\n    ignoreHTTPSErrors: true,\n    video: 'on-first-retry',\n  },\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    headless: false,\n    viewport: { width: 1280, height: 720 },\n    ignoreHTTPSErrors: true,\n    video: 'on-first-retry',\n  },\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Now run tests as usual, Playwright Test will pick up the configuration file automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=firefox\n")),(0,r.kt)("p",null,"If you put your configuration file in a different place, pass it with ",(0,r.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --config=tests/my.config.js\n")),(0,r.kt)("h2",{id:"local-configuration"},"Local configuration"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-test#test-use"},"test.use(options)")," you can override some options for a file or a ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-test#test-describe"},"test.describe(title, callback)")," block."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\n// Run tests in this file with portrait-like viewport.\ntest.use({ viewport: { width: 600, height: 900 } });\n\ntest('my portrait test', async ({ page }) => {\n  // ...\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\n// Run tests in this file with portrait-like viewport.\ntest.use({ viewport: { width: 600, height: 900 } });\n\ntest('my portrait test', async ({ page }) => {\n  // ...\n});\n")))),(0,r.kt)("p",null,"The same works inside describe."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('headed block', () => {\n  // Run tests in this describe block in headed mode.\n  test.use({ headless: false });\n\n  test('my headed test', async ({ page }) => {\n    // ...\n  });\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.describe('headed block', () => {\n  // Run tests in this describe block in headed mode.\n  test.use({ headless: false });\n\n  test('my headed test', async ({ page }) => {\n    // ...\n  });\n});\n")))),(0,r.kt)("h2",{id:"basic-options"},"Basic options"),(0,r.kt)("p",null,"These are commonly used options for various scenarios. You usually set them globally in ",(0,r.kt)("a",{parentName:"p",href:"#global-configuration"},"configuration file"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"actionTimeout")," - Timeout for each Playwright action in milliseconds. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," (no timeout)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseURL")," - Base URL used for all pages in the context. Allows navigating by using just the path, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"page.goto('/settings')"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browserName")," - Name of the browser that will run the tests, one of ",(0,r.kt)("inlineCode",{parentName:"li"},"chromium"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"firefox"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"webkit"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bypassCSP")," - Toggles bypassing Content-Security-Policy. Useful when CSP includes the production origin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channel")," - Browser channel to use. ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/browsers"},"Learn more")," about different browsers and channels."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headless")," - Whether to run the browser in headless mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"viewport")," - Viewport used for all pages in the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storageState")," - Populates context with given storage state. Useful for easy authentication, ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/auth"},"learn more"),".")),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    baseURL: 'http://localhost:3000',\n    browserName: 'firefox',\n    headless: true,\n  },\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    baseURL: 'http://localhost:3000',\n    browserName: 'firefox',\n    headless: true,\n  },\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",{id:"multiple-browsers"},"Multiple browsers"),(0,r.kt)("p",null,'Playwright Test supports multiple "projects" that can run your tests in multiple browsers and configurations. Here is an example that runs every test in Chromium, Firefox and WebKit, by creating a project for each.'),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"You can specify ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-testproject",title:"TestProject"},"different options")," for each project, for example set specific command-line arguments for Chromium."),(0,r.kt)("p",null,"Playwright Test will run all projects by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n\nRunning 5 tests using 5 workers\n\n  \u2713 [chromium] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n  \u2713 [firefox] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n  \u2713 [webkit] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--project")," command line option to run a single project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --project=firefox\n\nRunning 1 test using 1 worker\n\n  \u2713 [firefox] \u203a example.spec.ts:3:1 \u203a basic test (2s)\n")),(0,r.kt)("h2",{id:"emulation"},"Emulation"),(0,r.kt)("p",null,"Playwright can ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/emulation"},"emulate different environments")," like mobile device, locale or timezone."),(0,r.kt)("p",null,'Here is an example configuration that runs tests in "Pixel 4" and "iPhone 11" emulation modes. Note that it uses the ',(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/test-advanced#projects"},"projects")," feature to run the same set of tests in multiple configurations."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    // \"Pixel 4\" tests use Chromium browser.\n    {\n      name: 'Pixel 4',\n      use: {\n        browserName: 'chromium',\n        ...devices['Pixel 4'],\n      },\n    },\n\n    // \"iPhone 11\" tests use WebKit browser.\n    {\n      name: 'iPhone 11',\n      use: {\n        browserName: 'webkit',\n        ...devices['iPhone 11'],\n      },\n    },\n  ],\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    // \"Pixel 4\" tests use Chromium browser.\n    {\n      name: 'Pixel 4',\n      use: {\n        browserName: 'chromium',\n        ...devices['Pixel 4'],\n      },\n    },\n\n    // \"iPhone 11\" tests use WebKit browser.\n    {\n      name: 'iPhone 11',\n      use: {\n        browserName: 'webkit',\n        ...devices['iPhone 11'],\n      },\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"You can specify options separately instead of using predefined devices. There are also more options such as locale, geolocation, and timezone which can be configured."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"colorScheme")," - Emulates ",(0,r.kt)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",(0,r.kt)("inlineCode",{parentName:"li"},"'light'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'dark'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'no-preference'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deviceScaleFactor")," - Specify device scale factor (can be thought of as dpr). Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"geolocation")," - Context geolocation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasTouch")," - Specifies if device supports touch events."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isMobile")," - Whether the ",(0,r.kt)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"javaScriptEnabled")," - Whether or not to enable JavaScript in the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locale")," - User locale, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"en-GB"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"de-DE"),", etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"permissions")," - A list of permissions to grant to all pages in the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timezoneId")," - Changes the timezone of the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userAgent")," - Specific user agent to use in the context.")),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    locale: 'fr-FR',\n    geolocation: { longitude: 48.858455, latitude: 2.294474 },\n    permissions: ['geolocation'],\n  },\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    locale: 'fr-FR',\n    geolocation: { longitude: 48.858455, latitude: 2.294474 },\n    permissions: ['geolocation'],\n  },\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",{id:"network"},"Network"),(0,r.kt)("p",null,"Available options to configure networking:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"acceptDownloads")," - Whether to automatically download all the attachments. ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/downloads"},"Learn more")," about working with downloads."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," - An object containing additional HTTP headers to be sent with every request. All header values must be strings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpCredentials")," - Credentials for ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/network#http-authentication"},"HTTP authentication"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," - Whether to ignore HTTPS errors during navigation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"offline")," - Whether to emulate network being offline."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proxy")," - ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/network#http-proxy"},"Proxy settings")," used for all pages in the test.")),(0,r.kt)("h3",{id:"network-mocking"},"Network mocking"),(0,r.kt)("p",null,"You don't have to configure anything to mock network requests. Just define a custom ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-route",title:"Route"},"Route")," that mocks network for a browser context."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.beforeEach(async ({ context }) => {\n  // Block any css requests for each test in this file.\n  await context.route(/.css/, route => route.abort());\n});\n\ntest('loads page without css', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  // ... test goes here\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.beforeEach(async ({ context }) => {\n  // Block any css requests for each test in this file.\n  await context.route(/.css/, route => route.abort());\n});\n\ntest('loads page without css', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  // ... test goes here\n});\n")))),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-page#page-route"},"page.route(url, handler[, options])")," to mock network in a single test."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('loads page without images', async ({ page }) => {\n  // Block png and jpeg images.\n  await page.route(/(png|jpeg)$/, route => route.abort());\n\n  await page.goto('https://playwright.dev');\n  // ... test goes here\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('loads page without images', async ({ page }) => {\n  // Block png and jpeg images.\n  await page.route(/(png|jpeg)$/, route => route.abort());\n\n  await page.goto('https://playwright.dev');\n  // ... test goes here\n});\n")))),(0,r.kt)("h2",{id:"automatic-screenshots"},"Automatic screenshots"),(0,r.kt)("p",null,"You can make Playwright Test capture screenshots for you - control it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"screenshot")," option. By default screenshots are off."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not capture screenshots."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on'")," - Capture screenshot after each test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'only-on-failure'")," - Capture screenshot after each test failure.")),(0,r.kt)("p",null,"Screenshots will appear in the test output directory, typically ",(0,r.kt)("inlineCode",{parentName:"p"},"test-results"),"."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    screenshot: 'only-on-failure',\n  },\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    screenshot: 'only-on-failure',\n  },\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",{id:"record-video"},"Record video"),(0,r.kt)("p",null,"Playwright Test can record videos for your tests, controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"video")," option. By default videos are off."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not record video."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on'")," - Record video for each test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record video for each test, but remove all videos from successful test runs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on-first-retry'")," - Record video only when retrying a test for the first time.")),(0,r.kt)("p",null,"Video files will appear in the test output directory, typically ",(0,r.kt)("inlineCode",{parentName:"p"},"test-results"),"."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    video: 'on-first-retry',\n  },\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    video: 'on-first-retry',\n  },\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",{id:"record-test-trace"},"Record test trace"),(0,r.kt)("p",null,"Playwright Test can produce test traces while running the tests. Later on, you can view the trace and get detailed information about Playwright execution by opening ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/trace-viewer"},"Trace Viewer"),". By default tracing is off, controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," option."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not record trace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on'")," - Record trace for each test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record trace for each test, but remove it from successful test runs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on-first-retry'")," - Record trace only when retrying a test for the first time.")),(0,r.kt)("p",null,"Trace files will appear in the test output directory, typically ",(0,r.kt)("inlineCode",{parentName:"p"},"test-results"),"."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    trace: 'retain-on-failure',\n  },\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    trace: 'retain-on-failure',\n  },\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",{id:"more-browser-and-context-options"},"More browser and context options"),(0,r.kt)("p",null,"Any options accepted by ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-browsertype#browser-type-launch"},"browserType.launch([options])")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-browser#browser-new-context"},"browser.newContext([options])")," can be put into ",(0,r.kt)("inlineCode",{parentName:"p"},"launchOptions")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"contextOptions")," respectively in the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," section."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    launchOptions: {\n      slowMo: 50,\n    },\n  },\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    launchOptions: {\n      slowMo: 50,\n    },\n  },\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"However, most common ones like ",(0,r.kt)("inlineCode",{parentName:"p"},"headless")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"viewport")," are available directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," section - see ",(0,r.kt)("a",{parentName:"p",href:"#basic-options"},"basic options"),", ",(0,r.kt)("a",{parentName:"p",href:"#emulation"},"emulation")," or ",(0,r.kt)("a",{parentName:"p",href:"#network"},"network"),"."),(0,r.kt)("h2",{id:"testing-options"},"Testing options"),(0,r.kt)("p",null,"In addition to configuring ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-browser",title:"Browser"},"Browser")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", videos or screenshots, Playwright Test has many options to configure how your tests are run. Below are the most common ones, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.17/test-advanced"},"advanced configuration")," for the full list."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"forbidOnly"),": Whether to exit with an error if any tests are marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"globalSetup"),": Path to the global setup file. This file will be required and run before all the tests. It must export a single function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"globalTeardown"),": Path to the global teardown file. This file will be required and run after all the tests. It must export a single function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retries"),": The maximum number of retry attempts per test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testDir"),": Directory with the test files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testIgnore"),": Glob patterns or regular expressions that should be ignored when looking for the test files. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"'**/test-assets'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testMatch"),": Glob patterns or regular expressions that match test files. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"'**/todo-tests/*.spec.ts'"),". By default, Playwright Test runs ",(0,r.kt)("inlineCode",{parentName:"li"},".*(test|spec)\\.(js|ts|mjs)")," files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),": Time in milliseconds given to each test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webServer: { command: string, port: number, timeout?: number, reuseExistingServer?: boolean, cwd?: string, env?: object }")," - Launch a process and wait that it's ready before the tests will start. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.17/test-advanced#launching-a-development-web-server-during-the-tests"},"launch web server")," configuration for examples."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"workers"),": The maximum number of concurrent worker processes to use for parallelizing tests.")),(0,r.kt)("p",null,"You can specify these options in the configuration file. Note that testing options are ",(0,r.kt)("strong",{parentName:"p"},"top-level"),", do not put them into the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," section."),(0,r.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Look for test files in the \"tests\" directory, relative to this configuration file\n  testDir: 'tests',\n\n  // Each test is given 30 seconds\n  timeout: 30000,\n\n  // Forbid test.only on CI\n  forbidOnly: !!process.env.CI,\n\n  // Two retries for each test\n  retries: 2,\n\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n\n  use: {\n    // Configure browser and context here\n  },\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Look for test files in the \"tests\" directory, relative to this configuration file\n  testDir: 'tests',\n\n  // Each test is given 30 seconds\n  timeout: 30000,\n\n  // Forbid test.only on CI\n  forbidOnly: !!process.env.CI,\n\n  // Two retries for each test\n  retries: 2,\n\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n\n  use: {\n    // Configure browser and context here\n  },\n};\n\nmodule.exports = config;\n")))))}g.isMDXComponent=!0}}]);