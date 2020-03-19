import React from "react";
import styled from "styled-components";

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"
import Header from "../components/header"
import Container from "../components/container"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"


export default () => (
    <StaticQuery
      query={graphql`
        query {
            book: file(relativePath: { eq: "book.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            sarah: file(relativePath: { eq: "sarah-holding-pumpkin.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      `}
      render={data => (
        <section>
            <Header />
                <Flexbox>
                    <FlexItemOne>
                        <Container>
                            <Content>
                                <H3>the story of the growing season</H3>
                                <H2>HOW SARAH SAVED AN AMERICAN FARM</H2>
                                <P>The youngest of 21 children, Sarah Frey grew up poor on a struggling farm in Southern Illinois. At 15, she started her own fresh produce delivery business out of an old pickup truck, and because of her tenacity was able two years later to buy her family’s farm which faced foreclosure.
                                
                                <br /><br />
                                
                                Frey’s story is one of never taking no for an answer, negotiating with some of the biggest businesses in the nation and building a company and an expanding brand which serves consumers with fresh, healthy products.
                                
                                <br /><br />
                                
                                Frey Farms sells more pumpkins than any other producer in the nation, earning Frey the nickname “America’s Pumpkin Queen.” 
                                
                                <br /><br />
                                <a href="#prepurhcase">
                                <DesktopImage
                                    fluid={data.book.childImageSharp.fluid}
                                    objectFit='cover'
                                    objectPosition='50% 50%'
                                    alt='Sarah Frey holding pumpkins leaning on a truck'
                                />
                                </a>
                                
                                Filled with grit and grace, The Growing Season: How I Saved an American Farm -- and Built a New Life, tells the honest and inspiring story of how a scrappy upbringing gave Frey the resilience and work ethic to take risks and thrive, while at the same time maintaining the close ties to the community -- and the farm -- where she grew up. 
                                <a href="#prepurhcase">
                                <MobileImage
                                    fluid={data.book.childImageSharp.fluid}
                                    objectFit='cover'
                                    objectPosition='50% 50%'
                                    alt='Sarah Frey holding pumpkins leaning on a truck'
                                />
                                </a>
                                </P>
                            </Content>

                        </Container>
                    </FlexItemOne>

                    <FlexItemTwo>
                        <Bio>
                            <Name>Sarah Frey</Name>
                            <Tagline>Founder and CEO of Frey Farms</Tagline>
                        </Bio>
                        <Img
                            fluid={data.sarah.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            alt='Sarah Frey holding pumpkins leaning on a truck'
                            style={{ width: "100%", height: "100%" }}
                        />

                    </FlexItemTwo>
                    
                </Flexbox>
        </section>
      )}
    />
  )

  const DesktopImage = styled(Img)`
    width: 50%;
    float: right;
    @media (max-width: 899px) {
        display: none;
    }
`

const MobileImage = styled(Img)`
    width: 100%;
    @media (min-width: 900px) {
        display: none;
    }
`



const Content = styled.div`
    margin: 2em 0;
`
const Flexbox = styled.div`
 @media (min-width: 800px) {
    display: flex;
    align-items: stretch;
 }
`
const FlexItemOne = styled.div `
    @media (min-width: 800px) {
        width: 60%;
    }
`
const FlexItemTwo = styled.div` 
    position: relative;
    @media (min-width: 800px) {
        width: 40%;
    }
`
const Bio = styled.div`
    color: #fff;
    position: absolute;
    bottom: 3em;
    left: 3em;
    z-index: 1;
    @media (min-width: 800px) {
        bottom: 6em;
        left: 3em;
 }
`
const Name = styled.p`
    font-family: 'Handelson';
    font-size: 78px;
    margin: 0;
`
const Tagline = styled.p`
    font-family: 'Brandon Grotesque Regular';
    font-size: 16px;
    margin: -.4em 0 0 .5em;
`