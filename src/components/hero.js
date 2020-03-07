import React from "react";
import styled from "styled-components";

import H1 from "../components/typography/h1"
import P from "../components/typography/p"

import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import Quote from '../components/quote'


export default () => (
    <StaticQuery
      query={graphql`
        query {
            book: file(relativePath: { eq: "book.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            watermelons: file(relativePath: { eq: "watermelons.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
      `}
      render={data => (
        <section>
            <Wrap>
                <Flexbox>
                    <FlexitemOne>
                        <Img
                            fluid={data.book.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            alt='The Growing Season by Sarah Frey'
                            style={{ height: "100%", margin: "1.75em 0" }}
                        />
                    </FlexitemOne>
                    <FlexitemTwo>
                        <H1>The Growing Season</H1>
                        <P>One woman’s tenacious journey to escape poverty and create a billion-dollar farming business — without ever leaving the land she loved.</P>
                        <Quote />
                    </FlexitemTwo>
                </Flexbox>
            </Wrap>

            <Img
                fluid={data.watermelons.childImageSharp.fluid}
                objectFit='cover'
                objectPosition='50% 50%'
                alt='Sarahs Homegrown Watermelons'
                style={{ width: "100%" }}
            />
        </section>
      )}
    />
  )

  const Flexbox = styled.div`
    @media (min-width: 950px) {    
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        margin: 3em 0 -5em 0;
    }
    @media (min-width: 1200px) {
        margin-bottom: -8em;
    }
  `

  const FlexitemOne = styled.div`
    @media (min-width: 950px) {
        width: calc(100% / 12 * 6 - 2em);
        margin-left: 2em;
    }
`

const FlexitemTwo = styled.div`
    @media (min-width: 950px) {
        width: calc(100% / 12 * 6);
    }
`
const Wrap = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 1600px;
`
