/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allStrapiProject {
        edges {
          node {
            slug
            strapiId
            title
            caption
            mainImage {
              publicURL
            }
          }
        }
      }
    }
  `)

  //HANDLE ERRORS
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //create pages for Each Project
  const projectPageTemplate = path.resolve(
    "./src/pages/templates/ProjectPage.js"
  )

  result.data.allStrapiProject.edges.forEach(({ node }) => {
    const pathSlug = `/${node.slug}`
    createPage({
      path: pathSlug,
      component: projectPageTemplate,
      context: { slug: node.slug },
    })
  })
}
