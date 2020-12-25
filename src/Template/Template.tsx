import React, { useEffect, useState } from 'react'
import { Container, Box, Card, Grid, Button, CardContent } from "@material-ui/core"
const styles = require("./Template.module.css")
import Layout from '../pageLayouts/pageLayout'
import firebase from "gatsby-plugin-firebase"
import { Link } from "gatsby"


function Template({ pageContext: { data } }: any) {

  const [user, setUser] = useState<firebase.User | null>(null)
  useEffect(() => {
    let ignore = false

    function getUser() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          if (ignore === false) {
            setUser(user)
          }
        } else {
          if (ignore === false) {
            setUser(null)
          }
        }
      })
    }
    getUser()
    return () => {
      ignore = true
    }
  }, [])


    function truncate(str: any, n: number) {
        console.log(str.substr(0, n - 1))

        return str?.length > n ? str.substr(0, n - 1) + "..." : str
      }
      const details = data.description.childContentfulRichText.html
    
      const desc = details.replace(/<[^>]+>/g, "")






    return (
      <Layout>
        <div className="styles.overflow">
      <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <h1>Latest Blogs</h1>
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
      <Grid item md={8} sm={12} xs={12}>
    <Card>
      <Grid>
      <img
          className={styles.productImg}
          src={data.images.[0].file.url}
          alt={data.title}
        />
      </Grid>
      <h3 className={styles.productName}>{data.title}</h3>
      <p className={styles.productPrice}>{data.subtitle}</p>
      {!user ? (
          <div>
            <span className={styles.BlogDesc}>{truncate(desc, 250)}</span>
            <h1 className={styles.loginMsg}>
              Please <Link to="/login-signup">login</Link> to get full access
            </h1>
          </div>
        ) : (
          <div>
            <span className={styles.BlogDesc}>{desc}</span>
          </div>
        )}
          <body className={styles.groub}>
            {data.publishdata} 
          </body>
    </Card>
    </Grid>
      </Grid>
      </div>
      </Layout>
    )
}

export default Template

