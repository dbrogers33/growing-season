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
        places: '120728004620479', // Can be either a numeric ID or the URL ID
        params: {
          fields: 'hours', // See Facebooks API to see what you can query for
        },
        key: 'EAAB7KyAIiV8BAMxd6OSZBD6zKoQ4mjOWQoh0rlrltpUZAeZC7TMHDoQZBGM8I8aRl21OaTtXbrbjiW3ekB5ZC76xZCLGxm32OxZCxt5YShJL46hPoRRsVukB476zed2ZCatSKZBvKt6XoefZCa3RtjHx68wB6gdwfxiLJ25axMloBOkZBsGE7j40NMWez82ZB3P1swOfvz09nRva8gZDZD', // You will need to create a Facebook application and go through review in order to get an API token.
        version: '6.0', // The version of the graph API to use. Defaults to 5.0
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
