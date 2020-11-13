/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "_variables.scss" "_mixins.scss" "_base.scss" "_reset.scss" "_normalize.scss"',
        includePaths: [
          'src/styles/sass'
        ]
      }
    }
  ]
}
