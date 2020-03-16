import React from "react"
import { graphql } from "gatsby"

// Stuff that Denham has added
import Press from "../components/press"
import Hero from "../components/hero"
import PreOrder from "../components/pre-order-section"
import AboutSarah from "../components/about-sarah"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Reviews from "../components/reviews"
import Post from "../components/post"

import styled from "styled-components";

import SEO from "../components/seo"
import 'normalize.css'
import GlobalStyle from '../components/global-styles'

const IndexPage = ({ data }) => {
  
  const posts = data.allFacebookPosts.edges
    .map(edge => edge.node)
    .filter(post => post.message)
    .slice(0, 9)
return (

    <Main>
      <SEO title="Home" />
      <GlobalStyle />
      <Hero/>
      <PreOrder/>
      <AboutSarah/>
      <Reviews />
      <Facebook>
        {posts.map(post => (
          <Post 
            message={post.message}
            link={post.permalink_url}>
          </Post>
        ))}
      </Facebook>
      <Press/>
      <Contact/>
      <Footer/>
    </Main>

)
}

const Main = styled.main`
  margin-top: 0em;
`
const Facebook = styled.main`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`
export const query = graphql`
  query ActualitePageQuery {
    allFacebookPosts {
      edges {
        node {
          id
          message
          created_time
          permalink_url
          attachments {
            data {
              url
              type
              title
              media {
                image {
                  height
                  src
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
