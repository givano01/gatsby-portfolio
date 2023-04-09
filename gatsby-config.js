/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio gatsby`,
    siteUrl: `https://www.yourdomainga.tld`,
    social: {
      linkedIn: `givano`,
      github: `givano01`
    },
  },
  plugins: [
  "gatsby-plugin-sass", 
  "gatsby-plugin-image", 
  "gatsby-plugin-mdx", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp",
  "gatsby-transformer-json",
  "gatsby-image", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "path": "./src/data",
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/favicon.png',
    },
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Barlow Condensed`,
          file: `href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital@1&display=swap"`,
        },
        {
          name: "Montserrat",
          file: href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        },
        {
          name: "Source Sans Pro",
          file: href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        },
      ],
    },
  },


]
};