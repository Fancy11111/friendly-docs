/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "introduction",
    {
      "type": "category",
      "label": "Getting Started",
      "link": {
        "type": "doc",
        "id": "getting-started/index"
      },
      "items": [
        "getting-started/setup",
        "getting-started/install",
        "getting-started/verify"
      ]
    },
    {
      "type": "category",
      "label": "Widget SDK",
      "link": {
        "type": "doc",
        "id": "sdk/index"
      },
      "items": [
        "sdk/configuration",
        "sdk/events",
        "sdk/lifecycle",
        {
          "type": "category",
          "label": "SDK Reference",
          "link": {
            "type": "doc",
            "id": "sdk/reference/index"
          },
          "items": [{
            "type": "autogenerated",
            "dirName": "sdk/reference"
          }]
        }
      ]
    },
    {
      "type": "category",
      "label": "Server-side Validation",
      "link": {
        "type": "doc",
        "id": "api/overview"
      },
      "items": [
        "api/authentication",
        {
          "type": "doc",
          "id": "api/siteverify",
          "label": "HTTP Endpoints"
        }
      ]
    },
    {
      "type": "category",
      "label": "Guides",
      "link": {
        "type": "doc",
        "id": "guides/index"
      },
      "items": [
        "guides/automated-testing",
        "guides/browser-support",
        "guides/localization",
        "guides/csp",
        {
          "type": "category",
          "label": "Upgrading from v1",
          "link": {
            "type": "doc",
            "id": "guides/upgrading-from-v1/index"
          },
          "items": [
            "guides/upgrading-from-v1/why-upgrade",
            "guides/upgrading-from-v1/javascript-api",
            "guides/upgrading-from-v1/script",
            "guides/upgrading-from-v1/backend-integration"
          ]
        },
        "guides/migrating-from-recaptcha",
        "guides/migrating-from-hcaptcha"
      ]
    },
    {
      "type": "link",
      "href": "https://github.com/FriendlyCaptcha/friendly-captcha-sdk/blob/main/CHANGELOG.md",
      "label": "Changelog"
    }
  ],
};

module.exports = sidebars;
