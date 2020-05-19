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
                            <H3>About the Author</H3>
                            <H2>Meet Sarah</H2>
                            <Social/>
                            <P>The youngest of 21 children, Sarah Frey grew up on a struggling farm in Southern Illinois. At 16, she started her own fresh produce delivery business out of an old pickup truck. Two years later she took over the family farm and started doing business with the largest grocery retailers in the country.</P>

                            <P>Frey’s story is one of never giving up, negotiating with some of the biggest businesses in the nation and building a company which serves consumers with fresh, healthy products.</P>

                            <P>Frey Farms is the nation’s leading producer of pumpkins,earning Frey the nickname “America’s Pumpkin Queen.”</P>
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