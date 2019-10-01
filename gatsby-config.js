module.exports = {
  siteMetadata: {
    title: `CValerieK`,
    description: `Copyist at the Louvre and the Museum of Modern Art of Paris, C.ValérieK. has been painting with oil for 25 years and lives between Paris and New York. Influenced by Delaunay, Dufy and Macke for their sense of color and their boldness, C.ValérieK.’s creations spread joy, energy and enthusiasm, which she wants to convey with humor. C.ValérieK. also makes paintings on demand `,
    author: `@cvalk`,
    facebook: 'https://www.facebook.com/CValK/',
    instagram: 'https://www.instagram.com/cvaleriek/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-11200936-9',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        pageTransitionDelay: 0,
        cookieDomain: 'cvalk.com',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'cvalk',
        // This is field under which it's accessible
        fieldName: 'cvalk',
        // Url to query from
        url: 'https://cvalk.podezo.com/graphql',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
