import React from 'react'
import styled from "styled-components";
import { StaticQuery, graphql } from 'gatsby'

import H2 from '../components/typography/h2'
import H3 from '../components/typography/h3'
import P from '../components/typography/p'
import Img from "gatsby-image/withIEPolyfill"
import Container from "../components/container"

export default () => (
    <StaticQuery
      query={graphql`
        query {
            background: file(relativePath: { eq: "book-cover.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                }
            }
            fruitbackground: file(relativePath: { eq: "fruit-bg.png" }) {
                childImageSharp {
                  fluid(maxWidth: 1500, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
        }
      `}
      render={data => (
        <HeroWrapper>
        <Container>
            <Wrapper>
                <FlexItem>
                <a href="#prepurhcase">
                <Image
                    fluid={data.background.childImageSharp.fluid}
                    alt="Cover of The Growing Season by Sarah Frey"
                />
                </a>
                </FlexItem>
                <FlexItem>
                    <Copy>
                        <H3>The Story of The Growing Season</H3>
                        <H2>How Sarah Frey Saved an American Farm</H2>
                        <P>The youngest of 21 children, Sarah Frey grew up on a struggling farm in Southern Illinois. At 15, she started her own fresh produce delivery business out of an old pickup truck. Two years later she took over the family farm and started doing business with the largest grocery retailers in the country. Frey’s story is one of never giving up, negotiating with some of the biggest businesses in the nation and building a company which serves consumers with fresh, healthy products. Frey Farms is the nation’s leading producer of pumpkins,earning Frey the nickname “America’s Pumpkin Queen.”</P>
                    </Copy>
                </FlexItem>
               
            </Wrapper>
            
        </Container>
        
            <BackgroundImage
                fluid={data.fruitbackground.childImageSharp.fluid}
                objectPosition='50% 50%'
                style={{ position: "absolute" }}
            />

        </HeroWrapper>
      )}
    />
  )

  const HeroWrapper = styled.div`
  position: relative;
  @media (min-width: 900px) {
      display: flex;
      align-items: center;
      flex-direction: row;
  }
`
const Wrapper = styled.div`
    position: relative;
    margin: 4em 0;
    @media (min-width: 900px) {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
`
const Copy = styled.div`
    width: 90%;
    margin: 0 auto;
    @media (max-width: 900px) {
        margin: 2em auto;
    }
`
const Image = styled(Img)`

`
const FlexItem = styled.div`
    width: 100%;
    @media (min-width: 900px) {
        width: calc(100% / 2);
    }
`
const BackgroundImage = styled(Img)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
`
