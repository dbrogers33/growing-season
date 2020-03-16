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
                                <Img
                                    fluid={data.book.childImageSharp.fluid}
                                    objectFit='cover'
                                    objectPosition='50% 50%'
                                    alt='Sarah Frey holding pumpkins leaning on a truck'
                                    style={{ width: "50%", float: "right"}}
                                />
                                
                                Filled with grit and grace, The Growing Season: How I Saved an American Farm -- and Built a New Life, tells the honest and inspiring story of how a scrappy upbringing gave Frey the resilience and work ethic to take risks and thrive, while at the same time maintaining the close ties to the community -- and the farm -- where she grew up. </P>
                            </Content>

                        </Container>
                    </FlexItemOne>

                    <FlexItemTwo>
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


  const Content = styled.div`
    margin: 2em 0;
`
const Flexbox = styled.div`
    display: flex;
    align-items: stretch;
`
const FlexItemOne = styled.div `
    @media (min-width: 800px) {
        width: 60%;
    }
`

const FlexItemTwo = styled.div`
    @media (min-width: 800px) {
        width: 40%;
    }
`