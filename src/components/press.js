import React from 'react'
import styled from "styled-components";

import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import Container from "../components/container"


export default () => (
    <StaticQuery
      query={graphql`
        query {
            nytimes: file(relativePath: { eq: "press/newyorktimes.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            fortune: file(relativePath: { eq: "press/fortune.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            huffpost: file(relativePath: { eq: "press/huffpost.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            kitchen: file(relativePath: { eq: "press/kitchen.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            fbn: file(relativePath: { eq: "press/fbn.png" }) {
              childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
        }
      `}
      render={data => (

        <Container>

            
            <Flexbox>
                
                <Flexitem>
                    <a href="https://www.nytimes.com/2016/10/12/dining/pumpkin-farmer-sarah-frey-farms.html" target="_blank" rel="noopener noreferrer">
                        <Img
                            fluid={data.nytimes.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
                <Flexitem>
                    <a href="https://fortune.com/2014/10/08/watermelon-juicing-craze/" target="_blank" rel="noopener noreferrer">
                        <Img
                            fluid={data.fortune.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
                <Flexitem>
                  <a href="https://www.huffpost.com/entry/women-in-business-sarah-f_b_6945658?guccounter=1&guce_referrer=aHR0cHM6Ly9mcmV5ZmFybXMuY29tL3ByZXNzLw&guce_referrer_sig=AQAAADN1YqC4K_Hcfau9aObLLneAuha-MQQ3m22mcuSmTgpFWZ01PgwrXqpfUQP913NCMsPo0VoJH-hOprgMBYNwzDw-6EwA13xyPNr_Lp4Pc1Y7eso49wSSKRwiWgjOnZBF0KF43-tBu5ZTtzWUOZzChVSNzD66y6GytXLnFBe9fzbj" target="_blank" rel="noopener noreferrer">
                    <Img
                        fluid={data.huffpost.childImageSharp.fluid}
                        objectFit='cover'
                        objectPosition='50% 50%'
                        style={{ width: "100%" }}
                    />
                  </a>
                </Flexitem>
                <Flexitem>
                    <a href="https://www.thekitchn.com/the-watermelon-entrepreneur-how-one-midwest-girl-built-the-family-farm-into-a-watermelon-empire-234046" target="_blank" rel="noopener noreferrer">
                        <Img
                            fluid={data.kitchen.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
                <Flexitem>
                    <a href="https://www.foodbusinessnews.net/articles/12283-subway-to-roll-out-fresh-now-program-nationwide" target="_blank" rel="noopener noreferrer">
                        <Img
                            fluid={data.fbn.childImageSharp.fluid}
                            objectFit='cover'
                            objectPosition='50% 50%'
                            style={{ width: "100%" }}
                        />
                    </a>
                </Flexitem>
            </Flexbox>

        </Container>

    
  
      )
        
    }
    />
    
  )

const Flexbox = styled.div`
    padding: 4em 0;
`

const Flexitem = styled.div`
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    bottom: 0;
    width: calc(50% - 2em);
    padding: 1em;
    @media (min-width: 800px) {
        width: calc(20% - 2em);
        padding: 1ßem;
    }
`