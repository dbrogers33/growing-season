import React from "react";
import styled from "styled-components";

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import Container from "../components/container"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"


export default () => (
    <StaticQuery
      query={graphql`
        query {
            sarahshomegrown: file(relativePath: { eq: "sarahs-homegrown.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            tsamma: file(relativePath: { eq: "tsamma.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            freyfarms: file(relativePath: { eq: "frey-farms.png" }) {
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
                <H3 textAlign="center">Look how far we've come</H3>
                <H2 textAlign="center">Sarah's Brands</H2>
                <Flexbox>
                <Flexitem>
                    <a href="https://freyfarms.com/" target="_blank" rel="noopener noreferrer">
                        <Img
                            fluid={data.sarahshomegrown.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            alt='Sarahs Homegrown Watermelon Vines'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
                <Flexitem>
                    <a href="https://tsammajuice.com/" target="_blank" rel="noopener noreferrer">
                        <Img
                            fluid={data.tsamma.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            alt='Sarahs Homegrown Watermelon Vines'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
                <Flexitem>
                    <a href="https://freyfarms.com/" target="_blank" rel="noopener noreferrer">
                        <Img
                            fluid={data.freyfarms.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            alt='Sarahs Homegrown Watermelon Vines'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
                </Flexbox>
            </Container>
        </section>
      )}
    />
  )


const Flexbox = styled.div`
    margin: 1em 0;
    @media (min-width: 600px) {
        display: flex;
        justify-content: space-around;
    }
`
const Flexitem = styled.div`
    padding: 1em 15%;
    @media (min-width: 600px) {
        padding: 0;
        width: calc(100% / 3 - 8em);
    }
`