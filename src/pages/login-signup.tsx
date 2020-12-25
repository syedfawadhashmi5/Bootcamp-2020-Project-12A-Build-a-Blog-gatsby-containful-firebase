import React from "react"
import { useSelector } from "react-redux"
import LoginForm from "../components/LoginForm/LoginForm"
import SignupForm from "../components/SignUpForm/SignupForm"
import Layout from "../pageLayouts/pageLayout"
import { StateType } from "../Redux/Slicer"

const LoginOrSignup = () => {
  const { setAuthState } = useSelector((state: StateType) => state)
  return (
        <Layout>
          {setAuthState !== "PROFILE" && setAuthState === "LOGIN" ? (
            <LoginForm />
          ) : (
            <SignupForm />
          )}
        </Layout>
  )
}

export default LoginOrSignup
