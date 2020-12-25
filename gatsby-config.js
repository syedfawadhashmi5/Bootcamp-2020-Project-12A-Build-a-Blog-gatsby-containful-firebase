const dotenv = require("dotenv")
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}
dotenv.config()

module.exports = {
  siteMetadata:{
    title: "House Blogs"
  },
  /* Your site config here */
  plugins: [ 
    'gatsby-plugin-react-helmet',
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyC_5UxTEO5DNXLig7GFcnS0WgFlySc3AnQ",
          authDomain: "gats-byblogs.firebaseapp.com",
          databaseURL: "https://gats-byblogs-default-rtdb.firebaseio.com",
          projectId: "gats-byblogs",
          storageBucket: "gats-byblogs.appspot.com",
          messagingSenderId: "327199809986",
          appId: "1:327199809986:web:d2426b07c5608a9418b65b",
          measurementId: "G-113SB6BQS2"
        }      
      }
    }
  ],
}
