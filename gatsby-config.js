const fbQuery = `
picture {
  url
},
posts {
  message,
  created_time,
  id,
  permalink_url,
  attachments {
    type,
    media {
      image {
        src
      }
    }
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
        places: [`me`],
        params: {
          fields: fbQuery,
        },
        key: `EAAYivF1CuzcBADaywDOLQ7ZAPyTzmT5AZAZAEMCvnGFldGyZCPzJLcZBx96dJGZBagaa7e5TFwaZAP2e1X9jama5x07a7ZCXmjZBghgOOv71wOjpsKCUjBMiTUvy4jgYvhPxUWQJb3ebHJLELPabeTBIi8wWARTUUOrEZD`,
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-P3V3S53",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
