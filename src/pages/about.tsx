import React from "react"
const styles = require("./about.module.css")
import { Container, Box, Card, Grid } from "@material-ui/core"
import Layout from '../pageLayouts/pageLayout'


function about() {
  return (
    <Layout>
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.content_text}>
            <h1>About The Spruce</h1>
          </div>
        </div>
      </div>
      <Container className={styles.body}>
        <Box>
          <Grid>
            <Card>
              <div className={styles.body_text}>
                <h1>Who We Are</h1>
                <p>
                  At The Spruce, we offer practical, real-life tips and
                  inspiration to help you make your best home. From decorating
                  and gardening advice, to entertaining and home repair how-tos,
                  The Spruce can show you how. We help more than 44 million
                  users each month find the information they need to retile
                  their bathroom, update their decor, grow their garden, or
                  simply tackle a to-do list. Our 20-year-strong library of more
                  than 14,000 pieces of content helps you spruce up your space,
                  spruce up your yard, and spruce up your home. The Spruce is
                  part of The Spruce family of sites, including The Spruce Eats,
                  The Spruce Pets and The Spruce Crafts, covering home decor,
                  home repair, recipes, cooking techniques, pets, and crafts.
                  The Spruce brand is one of the top 3 largest lifestyle
                  properties online according to comScore, a leading Internet
                  measurement company. Our 45+ expert writers—including
                  professional contractors, landscapers, chefs, cookbook
                  authors, registered vet technicians, and well known crafting
                  bloggers—have extensive backgrounds and expertise in their
                  topics. We are also wholly committed to diversity, equity, and
                  inclusion.
                </p>
              </div>
            </Card>
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default about
