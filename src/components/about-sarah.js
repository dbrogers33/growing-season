import React from "react";
import styled from "styled-components";

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"
import Container from "../components/container"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"


export default () => (
    <StaticQuery
      query={graphql`
        query {
            sarah: file(relativePath: { eq: "sarah-frey-headshot.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            
        }
      `}
      render={data => (
        <section>
            <Container>
                <Content>
                    <Flexitem>
                    <Img
                        fluid={data.sarah.childImageSharp.fluid}
                        objectFit='cover'
                        objectPosition='50% 50%'
                        alt='Sarah Frey Headshot - Frey Farms'
                        style={{ width: "100%", height: "100%" }}
                    />
                    </Flexitem>

                    <Flexitem>
                        <Copy>
                            <H3>ABOUT THE AUTHOR</H3>
                            <H2>Meet Sarah</H2>
                            <P>Sara Frey, the founder of Frey Farms, sells more pumpkins than any other producer in the United States. The family business plants thousands of acres of fruits and vegetables across Florida, Georgia, Missouri, Arkansas, Illinois, Indiana, and West Virginia. With a mission to help eliminate food waste in the fresh produce industry, the family sources unused fruit from their farms and regional grower partners across the country to produce the “Sarah’s Homegrown” branded beverages and food products. Frey is a vocal advocate for American farmers and their need to access a legal immigrant workforce. The Frey family recruits upwards of 250 staff annually to assist with pumpkin harvest, which takes place across Illinois and Indiana.</P>
                        </Copy>
                    </Flexitem>

                </Content>
            </Container>
        </section>
      )}
    />
  )


const Content = styled.div`
    background: #F7FCF9;
    margin: 8em 0 4em  0;
    @media (min-width: 800px) {
        display: flex;
        align-items: stretch;
    }
`
const Flexitem = styled.div`
    @media (min-width: 800px) {
        width: 50%;
    }
`

const Copy = styled.div`
    padding: 1.5em;
`