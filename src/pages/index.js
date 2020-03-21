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
import H3 from "../components/typography/h3"
import Masonry from 'react-masonry-component';
import styled from "styled-components";

import SEO from "../components/seo"
import 'normalize.css'
import GlobalStyle from '../components/global-styles'

const IndexPage = ({ data }) => {
  const posts = data.allFacebookPosts.edges
    .map(edge => edge.node)
    .filter(post => post.message)
    .filter(post => post.attachments.data[0].type === 'photo')
    .slice(0, 9)
  return (

    <Main>
      <SEO title="Home" />
      <GlobalStyle />
      <Hero />
      <PreOrder />
      <AboutSarah />
      <Reviews />
      <Facebook>
      <Masonry>


        {posts.map((post, key) => (

          // return post.attachments !== null ?
           
          
              <Wrap key={key} >
                <Grid>
                  <Profile profilePic={data.facebookPicture.data.url}></Profile>
                  <div>
                    <H3>Sarah Frey</H3>
                    <Time>{post.created_time}</Time>
                  </div>
                </Grid>
                <Message>{post.message}</Message>
                <Image src={post.attachments.data[0].media.image.src} alt="test" />
                <FacebookLink href={post.permalink_url} target="_blank" rel="noopener noreferrer">View on Facebook</FacebookLink>
              </Wrap>

            // :

            //   <Wrap key={key}>
            //     <Grid>
            //       <Profile profilePic={data.facebookPicture.data.url}></Profile>
            //       <div>
            //         <H3>Sarah Frey</H3>
            //         <Time>{post.created_time}</Time>
            //       </div>
            //     </Grid>
            //     <Message>{post.message}</Message>
            //     <FacebookLink href={post.permalink_url} target="_blank" rel="noopener noreferrer">View on Facebook</FacebookLink>
            //   </Wrap>



        ))}

      </Masonry>
      <ButtonWrapper>
        <SocialLink href="https://www.facebook.com/sarah.talley.39" target="_blank" rel="noopener noreferrer">View More Posts</SocialLink>
      </ButtonWrapper>
      </Facebook>
      <Press />
      <Contact />
      <Footer />
    </Main>

  )
}

const Main = styled.main`
  margin-top: 0em;
`
const Facebook = styled.main`
    width: 90%;
    margin: 4em auto 0 auto;
`
const SocialLink = styled.a`
  color: white;
  background: #0F5800;
  font-family: 'Brandon Grotesque Regular';
  font-size: 18px;
  padding: 1em 2em;
  display: inline-block;
  transition: ease .2s;
  text-decoration: none;
  &:hover {
    background: #0F5400;
    cursor: pointer;
  }
`
const ButtonWrapper = styled.div`
  margin: 0 auto;
  display: table;
`
const Wrap = styled.div`
    border: 1px solid #C4C4C4;
    padding: 2em;
    margin: 1em;
    box-sizing: border-box;
    float: left;
    @media (min-width: 1200px) {
      width: calc(100% / 4 - 2em);
    }
    @media (max-width: 1199px) and (min-width: 800px) {
      width: calc(100% / 3 - 2em);
    }
    @media (min-width: 599px) and (max-width: 799px) {
      width: calc(100% / 2 - 2em);
    }
    
`
const Image = styled.img`
    width: 100%;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 3em auto;
    grid-gap: 1em;
`
const Time = styled.p`
    margin: -.35em 0;
    font-family: 'Brandon Grotesque Regular';
    color: #545454;
    font-size: 14px;
`

const Profile = styled.div`
    width: 3em;
    height: 3em;
    background: black;
    background-image: url(${props => props.profilePic});
    background-size: cont;
    background-position: 50% 50%;
`
const FacebookLink = styled.a`
    font-family: 'Brandon Grotesque Regular';
    color: #0F5800;
    font-size: 14px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const Message = styled.p`
    font-family: 'Brandon Grotesque Regular';
    color: #545454;
    font-size: 16px;
    text-align: ${props => props.textAlign};
    font-display: auto;
    line-height: 1.45em;
    @media (min-width: 1200px) {
        font-size: 18px;
    }
`


export const query = graphql`
  query {
    facebookPicture {
      data {
        url
      }
    }
    allFacebookPosts (sort: {fields: created_time, order: DESC}) {
      edges {
        node {
          id
          message
          created_time(formatString: "ll")
          permalink_url
          attachments {
            data {
              type
              media {
                image {
                  src
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
