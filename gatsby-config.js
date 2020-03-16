const fbQuery = `posts {
  message,
  created_time,
  id,
  permalink_url,
  attachments {
    url,
    type,
    title,
    media,
    target
  }
}`

module.exports = {
  siteMetadata: {
    title: `The Growing Season by Sarah Frey`,
    description: `The Growing Season tells of Sarah’s entrepreneurial spirit that was nurtured at the young age of eight, while accompanying her
    mother on a summer produce route selling farm-fresh produce to grocery retailers in southern
    Illinois.`,
    author: `Sarah Frey`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
    },
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`hutsoninc`],
        params: {
          fields: fbQuery,
        },
        key: `EAAB7KyAIiV8BAFVHr7jgQo2gSROUpK05k2CfwX5MAa1nLx8tBPAvQoRCiiAbZCe4tDHQ3OVyCnnvzmumQI2lJ1DbN71qEi1CYZAAxjMyPguve0ajGaxZAkEieqibwJ4vMLuCfGRGqg1rhXrQGZA33ZBkaWZBQj0ZBvjh7nnOxIXtVknCrlP0JeRNwwA1egiqfcbVOgZA1YGVIwZDZD`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
