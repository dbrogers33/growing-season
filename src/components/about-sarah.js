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
                            <P>Sarah Frey is the Founding Farmer of Frey Farms, a major produce and beverage provider with operations in seven states. The fast-growing company supplies fresh produce and beverages to retailers nationwide, and has undertaken a mission to eliminate food waste by using unused fruit to create a line of healthy fruit juices and produce marketed under the company’s Sarah’s Homegrown brand. Frey’s ability to negotiate has been featured in a Harvard Business School case study. Frey Farms is based in Orchardville, Ill., the town where Frey grew up and launched her business.</P>
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