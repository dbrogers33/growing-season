import React from "react"
import { Link } from "gatsby"

// Stuff that Denham has added
import Press from "../components/press"
import Hero from "../components/hero"
import AboutBook from "../components/about-book"
import styled from "styled-components";

import SEO from "../components/seo"

const IndexPage = () => (
  <Main>
    <SEO title="Home" />
    <Press/>
    <Hero/>
    <AboutBook/>
  </Main>
)

const Main = styled.main`
  margin-top: 2em;
`

export default IndexPage
