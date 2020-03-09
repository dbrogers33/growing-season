import React from 'react'
import styled from "styled-components";
import H2 from "../components/typography/h2"

import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import Container from "../components/container"


export default () => (
    <StaticQuery
      query={graphql`
        query {
            barnesNoble: file(relativePath: { eq: "barnes-and-noble.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            amazon: file(relativePath: { eq: "amazon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            walmart: file(relativePath: { eq: "walmart.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            randomHouse: file(relativePath: { eq: "random-house.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      `}
      render={data => (
        <Wrap>
        <Container>
            <H2 textAlign="center">PRE-ORDER YOUR COPY AT...</H2>
            
            <Flexbox>
                
                <Flexitem>
                    <a href="https://www.barnesandnoble.com/w/the-growing-season-sarah-frey/1133865222" target="_blank">
                        <Img
                            fluid={data.barnesNoble.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            alt='Pre order The Growing Season at Barnes and Noble'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
                <Flexitem>
                    <a href="https://www.amazon.com/Growing-Season-Saved-American-Farm/dp/0593129393" target="_blank">
                        <Img
                            fluid={data.amazon.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            alt='Pre order The Growing Season at Amazon'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
                <Flexitem>
                    <Img
                        fluid={data.walmart.childImageSharp.fluid}
                        objectFit='cover'
                        objectPosition='50% 50%'
                        alt='Pre order The Growing Season at Walmart'
                        style={{ width: "100%" }}
                    />
                </Flexitem>
                <Flexitem>
                    <a href="https://www.penguinrandomhouse.com/books/610559/the-growing-season-by-sarah-frey/" target="_blank">
                        <Img
                            fluid={data.randomHouse.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            alt='Pre order The Growing Season at Random House'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
            </Flexbox>

        </Container>

    
    </Wrap>
      )
        
    }
    />
    
  )

const Wrap = styled.section`
    padding: 3em 0;
    background: #F7FCF9;
`
const Flexbox = styled.div`
    display: flex;
    align-items: center;
    padding: 1em 0;
`

const Flexitem = styled.div`
    justify-content: space-around;
    width: calc(50% - 2em);
    padding: 1em;
    @media (min-width: 800px) {
        width: calc(25% - 4em);
        padding: 2em;
    }
`