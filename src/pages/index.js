import React from "react"

// Stuff that Denham has added
import Press from "../components/press"
import Hero from "../components/hero"
import PreOrder from "../components/pre-order-section"
import AboutSarah from "../components/about-sarah"
import Contact from "../components/contact"
import Footer from "../components/footer"

import styled from "styled-components";

import SEO from "../components/seo"
import 'normalize.css'
import GlobalStyle from '../components/global-styles'

const IndexPage = () => (

    <Main>
      <SEO title="Home" />
      <GlobalStyle />
      <Hero/>
      <PreOrder/>
      <AboutSarah/>
      <Press/>
      <Contact/>
      <Footer/>
    </Main>

)

const Main = styled.main`
  margin-top: 0em;
`

export default IndexPage
