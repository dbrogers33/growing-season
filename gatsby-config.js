const fbQuery = `posts {
  message,
  created_time,
  id,
  permalink_url,
  picture {
    profile_pic_source
  },
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
        key: `EAAB7KyAIiV8BAK6XNlpwOlZAr2HZB00n2EOek6p4lgFoItb7N7N6mBJiV3pf7nICWbZACBIdJGMdXtDP3VPiUx8agiZB2wi17bAsKhpDnP3u8agcy3k9eL2OXPZBD3JggVWCQYOfIweDY1nupAanQ5CcrNT5zlZAwZD`,
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
