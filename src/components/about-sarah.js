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
                            <P>Sarah Frey is the Founding Farmer and CEO of Frey Farms. Frey was born in Southern Illinois and raised in the small farming community of Orchardville. At age 16, Frey was determined to escape rural poverty and started a fresh produce delivery business out of the back of an old pickup truck. After a hardscrabble adolescence, she learned to survive and eventually thrive off the land on which she was raised. As a teenager, with a healthy dose of moxie, she began negotiating fresh produce deals with the nation’s largest retailers. Nearly two decades later, the family business manages thousands of acres of fruit and vegetables on farms in Florida, Georgia, Missouri, Arkansas, Illinois, Indiana, and West Virginia. Dubbed “America’s Pumpkin Queen” by the New York Times, she sells millions of pumpkins annually. Her humble beginnings and early life on the farm inspired her to develop “Sarah’s Homegrown,” a line of fresh beverages and natural food products made from unmarketable or “ugly fruit.” Frey is a vocal advocate for American farmers and has a longstanding commitment to improving the quality of life for those living and working in the nation’s most rural communities. She still lives, works and is raising her two sons, William and Luke, on the same small farm where she grew up.</P>
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
    @media (min-width: 900px) {
        display: flex;
        align-items: stretch;
    }
`
const Flexitem = styled.div`
    @media (min-width: 900px) {
        width: 50%;
    }
`

const Copy = styled.div`
    padding: 1.5em;
`