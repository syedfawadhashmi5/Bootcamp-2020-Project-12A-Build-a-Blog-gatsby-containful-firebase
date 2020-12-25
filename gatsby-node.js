const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
{
  allContentfulBlogPost {
    edges {
      node {
        title
        subtitle
        author
        slug
        publishdata
        images {
          file {
            fileName
            url
          }
        }
        description {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
}
`)


    
result.data.allContentfulBlogPost.edges.forEach(data => {
      console.log(JSON.stringify(data))
      createPage({
        path: `/blogs/${data.node.slug}`,
        component: path.resolve("./src/Template/Template.tsx"),
        context: {
          data: data.node,
        },
      })
    })
  }