import React from "react";
import styled from "styled-components";

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"
import Social from "../components/social-button"
import Container from "../components/container"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"


export default () => (
    <StaticQuery
      query={graphql`
        query {
            sarah: file(relativePath: { eq: "sarah-frey-headshot.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            vine: file(relativePath: { eq: "corner-vine.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 100, height: 100) {
                      ...GatsbyImageSharpFixed
                    }
                }
            }
        }
      `}
      render={data => (
        <section>
            <Container>
                <Content>
                <Img
                    fixed={data.vine.childImageSharp.fixed}
                    alt='The Growing Season by Sarah Frey'
                    style={{ position: "absolute", right: "0", top: "0", transform: "rotate(270deg)" }}
                />
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
                            <Social/>
                            <P>Sarah Frey has been described by the New York Times as “the Pumpkin Queen of America”. She sells more pumpkins than any other producer in the United States. Her family business, Frey Farms, plants thousands of acres of fruits and vegetables in Florida, Georgia, Missouri, Arkansas, Illinois, Indiana, and West Virginia. With a mission to end food waste in the fresh produce industry, the family makes natural food products and beverages from imperfect or “ugly fruit”.  Inspired by her humble beginnings and early life on the farm, she continues to create opportunities for those living and working in rural communities. Frey lives in Southern Illinois and is raising her two sons, William and Luke, on the same family farm where she grew up..</P>
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
    margin: 4em 0 4em  0;
    position: relative;
    @media (min-width: 1200px) {
        display: flex;
        align-items: stretch;
    }
`
const Flexitem = styled.div`
    @media (min-width: 1200px) {
        width: 50%;
    }
`

const Copy = styled.div`
    padding: 1.5em;
`