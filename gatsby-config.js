module.exports = {
  siteMetadata: {
    title: `Bruno Torres Fabila`,
    description: `Personal porfolio site for me.`,
    author: `Bruno Torres Fabila`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `brunotorres-dev`,
        short_name: `bruno`,
        start_url: `/`,
        background_color: `#c3b6f9`,
        theme_color: `#c3b6f9`,
        display: `minimal-ui`,
        icon: `src/images/bruno-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
