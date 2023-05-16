# Project Landspace Powered By Next.js & WordPress

Scaling WordPress with the power of [Next.js](https://nextjs.org/) and the static web!

- [⚡️ Quick Start](#%EF%B8%8F-quick-start)
- [🚀 Getting Started](#-getting-started)
- [🛠 Configuring Your Project](#-configuring-your-project)
- [🔌 Plugins](#-plugins)

## ⚡️ Quick Start

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/colbyfayock/next-wordpress-starter) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fimcery%2Flandspace-next-wordpress)

## 🚀 Getting Started

### What is this and what does it include?

The goal of this project is to take WordPress as a headless CMS and use Next.js to create a static experience without
any 3rd party services that can be deployed anywhere.

Currently, the project supports the following features:
* Blog
* Pages
* Posts
* Categories
* Authors
* Search
* RSS
* Sitemap

Additionally, the project is SEO friendly and performant out of the box, including:
* Unique page titles
* Unique descriptions
* Open Graph tags

You can also optionally enable Yoast SEO plugin support to supercharge your SEO! (See below)

### Requirements
* [WordPress](https://wordpress.org/)
* [WPGraphQL](https://www.wpgraphql.com/)
* [WPGraphQL for Advanced Custom Fields](https://wpgraphql.com/acf/)
* Environment variables (see below)
 
Add an `.env.local` file to the root with the following:
```
WORDPRESS_GRAPHQL_ENDPOINT="http://wordpressite.com/graphql"
```

### Environment

This project makes use of WPGraphQL to query WordPress with GraphQL. In order to make that request to the appropriate
endpoint, we need to set a environment variable to let Next.js know where to request the site information from.

Create a new file locally called `.env.local` and add the following:

```
WORDPRESS_GRAPHQL_ENDPOINT="[WPGraphQL Endpoint]"
```

Replace the contents of the variable with your WPGraphQL endpoint. By default, it should resemble `[Your Host]/graphql`.

*Note: environment variables can optionally be statically configured in next.config.js*

#### All Environment Variables

| Name                               | Required | Default | Description                                       |
| ---------------------------------- | -------- | -       | ------------------------------------------------- |
| WORDPRESS_GRAPHQL_ENDPOINT         | Yes      | -       | WordPress WPGraphQL endpoint (ex: host.com/graphl)|
| WORDPRESS_MENU_LOCATION_NAVIGATION | No       | PRIMARY | Configures header navigation Menu Location        |
| WORDPRESS_PLUGIN_SEO               | No       | false   | Enables SEO plugin support (true, false)          |

Please note some themes do not have PRIMARY menu location.

### Development

To start the project locally, run:

```bash
yarn dev
# or
npm run dev
```
The project should now be available at [http://localhost:3000](http://localhost:3000)

To build the project, run:

```bash
yarn build
# or
npm run build
```

This creates a new folder `out/` in the root directory with all the static files in it.

#### WordPress Advanced Custom Fields

In order to ensure consistency and maintainability of custom Flexible Fields for Page_Components, it's recommended to
define them in the `PAGE_COMPONENTS_ACF_FIELDS` variable. This variable is located in `src/data/pages.js`, and contains a
fragment of all the Flexible Fields defined for GraphQL.

After defining the Flexible Fields, the next step is to create a new React component for each component in the
`src/components/PageComponents/` folder. **It's important to ensure that the component's name exactly matches the name of
the Flexible Field.**

By following these guidelines, you can ensure that your custom Page_Components are well-organized and easy to maintain.

#### ESLint extension for Visual Studio Code

It is possible to take advantage of this extension to improve the development experience.
To set up the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in Visual
Studio Code add a new folder to the root `.vscode`. Inside add a file `settings.json` with the following content:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

With this file ESLint will automatically fix and validate syntax errors and format the code on save (based on Prettier
configuration).

### Deployment

#### Netlify

There are two options as to how you can deploy this project to Netlify:
* [Essential Next.js Plugin](https://github.com/netlify/netlify-plugin-nextjs) (recommended)
* [Exporting the project](https://nextjs.org/docs/advanced-features/static-html-export) via `next export`

**Essential Next.js Plugin** should be provided as an option when you're first importing a project based on this
starter. If it's not, you can install this plugin using the Netlify Plugins directory. This will allow the project to
take full advantage of all native Next.js features that Netlify supports with this plugin.

**Exporting the project** lets Next.js compile the project into static assets including HTML files. This allows you to
deploy the project as a static site directly to Netlify just like any other site. You can do this by
adding `next export` to the end of the `build` command inside `package.json` (ex: `next build && next export`).

Regardless of which option you choose, you can configure your [environment variables](#environment) either when creating
your new site or by navigating to Site Settings > Build & Deploy > Environment and triggering a new deploy once added.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/imcery/lannext-wordpress-starter)

#### Vercel

Given Next.js is a Vercel-supported project, you can simply import the project as a new site and configure
your [environment variables](#environment) by either adding them during import or by navigating to Settings >
Environment Variables and triggering a new build once added.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fimcery%2Flandspace-next-wordpress)

## 🛠 Configuring Your Project

### package.json

In order to avoid an additional configuration file, we take advantage of some built-in properties of `package.json` to
configure parts of the website.

| Name                       | Required | Description                                                        |
| -------------------------- | -------- | ------------------------------------------------------------------ |
| homepage                   | Yes      | Homepage or hostname used to construct full URLs (ex Open Graph)   |

- homepage: Setting the `homepage` property will update instances where the full URL is required such as Open Graph tags

### WordPress

This project aims to take advantage of as many built-in WordPress features by default like a typical WordPress theme.
Those include:

| Name                       | Usage                                   |
| -------------------------- | --------------------------------------- |
| Site Language              | `lang` attribute on the `<html>` tag    |
| Site Title                 | Homepage header, page metadata          |
| Tagline                    | Homepage subtitle                       |

There is some specific WordPress configuration required to allow for the best use of this starter.

### Images

This project doesn't currently provide any mechanisms for dealing with image content from WordPress. The images are
linked to "as is", meaning if the image is uploaded via the WordPress interface, the image will be served from
WordPress.

To serve the images statically, you have a few options.

#### Jetpack

By enabling the Image Accelerator from Jetpack, your images will automatically be served statically and cached via the
wp.com CDN. This feature comes free with the basic installation of Jetpack, requiring only that you connect the
WordPress site to the Jetpack service.

[Jetpack CDN](https://jetpack.com/features/design/content-delivery-network/)

## 🔌 Plugins

### Yoast SEO

The Yoast SEO plugin is partially supported including most major features like metadata and open graph customization.

#### Requirements
* Yoast SEO plugin
* Add WPGraphQL SEO plugin

To enable the plugin, configure `WORDPRESS_PLUGIN_SEO` to be `true` either as an environment variable or within
next.config.js.