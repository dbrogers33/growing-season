import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"

import H3 from "../components/typography/wide-h3"
import Container from "../components/container"

export default () => (
    <StaticQuery
      query={graphql`
        query {
            file(relativePath: { eq: "press-logos.png" }) {
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
            <Container>
                <H3 textAlign="center">SARAH FREY HAS BEEN FEATURED IN</H3>
                <Img
                    fluid={data.file.childImageSharp.fluid}
                    objectFit='cover'
                    objectPosition='50% 50%'
                    alt='Press Images'
                    style={{ height: "100%" }}
                />
            </Container>
          </section>
      )}
    />
  )