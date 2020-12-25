import React from "react"
const styles = require("./index.module.css")
import { graphql, useStaticQuery, navigate } from "gatsby"
import { Container, Box, Card, Grid, Button, CardContent } from "@material-ui/core"
import Layout from '../pageLayouts/pageLayout'

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
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


  return (
    <Layout>
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.content_text}>
            <h1>IT'S TIME THAT YOU LOVE YOUR HOME</h1>
            <p>
            WE'RE HERE TO HELP DESIGN, BUILD, AND REMODEL YOUR SPACE
            </p>
          </div>
        </div>
      </div>
      {/* end header */}
      <div className={styles.center_blog}>
        <Container>
          <Box>
            <Card className={styles.card_body}>
              <Grid className={styles.card_content_body}>
                <div className={styles.card_content_text}>
                  <h1>Recipes + Decor: Home Style Saturdays</h1>
                  <p>
                    Happy weekend before Christmas! I can hardly believe how
                    fast December has flown by! How's everyone doing? I have
                    some pre-Christmas inspiration for you today, I hope you
                    enjoy! Need some tunes to listen to this week? Here's my
                    Cozy Holiday Home Playlist! Enjoy this week's Home Style
                    Saturdays posts from me and my friends below! The Inspired
                    Room |...
                  </p>
                  <Button 
                  variant="contained" 
                  color="primary" 
                  size="small"
                  onClick = {()=>{navigate(`/about/`)}}
                  >
                    Read more
                  </Button>
                </div>
              </Grid>
              <Grid className={styles.card_content_image_section}>
                <div className={styles.card_content_image}></div>
              </Grid>
            </Card>
          </Box>
        </Container>
      </div>
      {/* mid_section_end */}
      <div className={styles.blogs}>
      <h1 className={styles.heading_text}>The Best Holiday Decorating Tips Our Latest Blogs</h1>
      <Grid container alignItems="center" spacing={3}>
      {data.allContentfulBlogPost.edges.map((edge: any, ind: string) => {
       const details = edge.node.description.childContentfulRichText.html
       const desc = details.replace(/<[^>]+>/g, "")
        return(
            <Grid item md={4} sm={6} xs={12} key={ind}>
            <Card key={ind}>
            <CardContent>
              <Grid>
                <img
                className={styles.productImg} 
                src={edge.node.images.[0].file.url}
                alt = {edge.node.images.[0].file.fileName}
                />
              </Grid>
              <h3 className={styles.productName}>{edge.node.title}</h3>
              <p className={styles.productPrice}>{edge.node.subtitle}</p>
              <h4 className={styles.productslug}>Decoration Category  <span>&#8680;</span> {edge.node.slug}</h4>
                  <body className={styles.productDes}>
                    {desc}
                  </body>
                  <body className={styles.groub}>
                    {edge.node.publishdata} 
                    <Button 
                    variant="contained"
                     color="primary" 
                     size="small"
                     onClick = {()=>{navigate(`/blogs/${edge.node.slug}`)}}
                     >Read more</Button>
                  </body>
              </CardContent>
            </Card>
            </Grid>
        )
      })}
      </Grid>
      </div>
    </Layout>
  )
}
