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
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Open Sans`,
          file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
        },
      ],
    },
  },

]
};