import React from "react"
import { Link } from "gatsby"

// Stuff that Denham has added
import Press from "../components/press"
import Hero from "../components/hero"
import AboutBook from "../components/about-book"
import PreOrder from "../components/pre-order-section"
import AboutSarah from "../components/about-sarah"
import Brands from "../components/brands"
import Gallery from "../components/image-gallery"
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
      <Press/>
      <Hero/>
      <PreOrder />
      <AboutBook/>
      <AboutSarah/>
      <Brands/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </Main>

)

const Main = styled.main`
  margin-top: 2em;
`

export default IndexPage
