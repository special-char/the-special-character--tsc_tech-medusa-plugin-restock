<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa Plugin
</h1>


<p align="center">
  Building blocks for digital commerce
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
</p>

## Compatibility

This starter is compatible with versions >= 2.4.0 of `@medusajs/medusa`. 

## @tsc_tech/medusa-plugin-restock

This plugin that notifies customers when an out-of-stock item becomes available again. This helps businesses boost sales and improve customer satisfaction by keeping shoppers informed and engaged. The plugin supports automated alerts via email ensuring customers never miss out on their desired products. 🚀



## Installation

To install the `@tsc_tech/medusa-plugin-restock`, run the following command:

```
npm install @tsc_tech/medusa-plugin-restock
```
or
```
yarn add @tsc_tech/medusa-plugin-restock
```


## Configuration

Step 1: Update Medusa Configuration Modify your medusa-config.ts to include the restock plugin:

```
module.exports = defineConfig({
  plugins: [
    {
      resolve: "@tsc_tech/medusa-plugin-restock",
      options: {
        frontendUrl: process.env.FRONTEND_URL,
      },
    },
    ],
})
```

## Environment Variables

```
FRONTEND_URL=http://localhost:8000 // your frontend url
```


Run migrations after installation

```
npx medusa db:migrate
```

NOTE: You must have one notification provider configured to send email.

## Troubleshooting

If you encounter issues while setting up the plugin, consider the following:

Database Migration Issues: Run npx medusa db:migrate again and ensure your database is correctly set up.


## Contribution

We welcome contributions to improve this plugin! If you have suggestions or find issues, feel free to submit a pull request or open an issue in the repository.