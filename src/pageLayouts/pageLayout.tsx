import React, { ReactNode,  useEffect, useRef, useState } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, graphql, useStaticQuery } from "gatsby"
const styles = require("./pageLayout.module.css")
import { StateType, changeAuthState } from "../Redux/Slicer"
import { useSelector, useDispatch } from "react-redux"
import { Logout } from "../components/auth"
import firebase from "gatsby-plugin-firebase"


interface props {
  children: ReactNode
}

export default function PageLayout({ children }: props) {

  const [display, setDisplay] = useState<boolean>(false)
  const [user, setUser] = useState<firebase.User | null>(null)
  const dispatch = useDispatch()
  const show = useRef<HTMLLinkElement>(null)

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

  function handleNav() {
    if (display === false) {
      if (show.current !== null) {
        show.current.style.right = "0"
        setDisplay(true)
      }
    } else {
      if (show.current !== null) {
        show.current.style.right = "-100%"
        setDisplay(false)
      }
    }
  }

  function handleLogOut() {
    dispatch(changeAuthState("LOGIN"))
    Logout()
  }


  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Navbar className={styles.navBar} expand="lg">
        <Navbar.Brand>
          <Link className={styles.navBarHomeHeading} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          className={styles.toggle}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navBarHeadingsContainer}>
            <div className={styles.ButtonsInnerContainer}>
              <Link
                className={styles.otherHeadigs}
                activeClassName={styles.otherHeadingsActive}
                to="/"
              >
                Home
              </Link>

              <Link
                className={styles.otherHeadigs}
                activeClassName={styles.otherHeadingsActive}
                to="/blogs/"
              >  
              Design-Build Blog
              </Link>

              <Link
                className={styles.otherHeadigs}
                activeClassName={styles.otherHeadingsActive}
                to="/about/"
              >
                About
              </Link>
            </div>
            {!user ? (
          <Link 
          className={styles.otherHeadigs}
          activeClassName={styles.otherHeadingsActive}
           to="/login-signup/">
            Login/Signup
          </Link>
        ) : (
          <Link to="." className={styles.link} onClick={handleLogOut}>
            Logout
          </Link>
        )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {children}
    </div>
  )
}
