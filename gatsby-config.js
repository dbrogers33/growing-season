const fbQuery = `
posts {
  message,
  created_time,
  id,
  permalink_url
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
        key: `EAAYivF1CuzcBANurNyBUiQuvcJRtrZByvbdMpYpuxrBmZAauNcHS2iIlZCsKDVZC1vh2VCHMHknelUgTCdsYGBso9yutJxymU3jfHF50U9fg4rMZB9djaxA2iZA9Cu8TYzbHUmHAG91jfZAX52LJv2Tp70ATj9BbcSZAP1dkcwywnAMwYzWgSGhuhckwo4dKLdS41LZAnEZCAG7AZDZD`,
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
