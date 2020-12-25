import React from "react"
const styles = require("./blogs.module.css")
import { Link, navigate, graphql, useStaticQuery } from "gatsby"
import {Card, Grid, Button, } from "@material-ui/core"
import Layout from '../pageLayouts/pageLayout'

const blogs = () => {
  const data = useStaticQuery(
    graphql`
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
    `
  )

  function truncate(str: any, n: number) {
    console.log(str.substr(0, n - 1))

    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }
  return(
  <div className={styles.msin_div}>
        <Layout> 
          <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.content_text}>
            <h1>THE DESIGN-BUILD BLOG</h1>
            <p>“We are very passionate about educating homeowner’s.
               From design ideas to hiring a contractor,
                we hope this blog helps you in the process of remodeling your home. “
            </p>
          </div>
        </div>
      </div>
<Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="center"
  spacing={6}
>

{data.allContentfulBlogPost.edges.map((edge: any, ind: string) => { 
       const details = edge.node.description.childContentfulRichText.html
       const desc = details.replace(/<[^>]+>/g, "")
  console.log(edge)

  return(
    <Grid item md={6} sm={6} xs={12} key={ind}>
    <Card  key={ind}>
      <Grid>
        <img
        className={styles.productImg} 
        src={edge.node.images.[0].file.url}
        alt = {edge.node.images.[0].file.fileName}
        />
      </Grid>
      <h3 className={styles.productName}>{edge.node.title}</h3>
      <p className={styles.productPrice}>{edge.node.subtitle}</p>
      <div>
            <span className={styles.BlogDesc}>{truncate(desc, 100)}</span>
          </div>
                  <body className={styles.groub}>
            {edge.node.publishdata} 
            <Button 
            variant="contained"
             color="primary" 
             size="small"
             onClick = {()=>{navigate(`/blogs/${edge.node.slug}`)}}
             >Read more</Button>
          </body>
    </Card>
    </Grid>
)
})}
</Grid>
</Layout>
</div>
)


}


export default blogs