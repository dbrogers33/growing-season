import React from "react";
import styled from "styled-components";

import H1 from "../components/typography/h1"
import P from "../components/typography/p"

import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import Container from '../components/container'
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
            <Container>

                <Img
                    fluid={data.book.childImageSharp.fluid}
                    objectFit='cover'
                    objectPosition='50% 50%'
                    alt='The Growing Season by Sarah Frey'
                    style={{ height: "100%", margin: "1.75em 0" }}
                />
                <H1>The Growing Season</H1>
                <P>One woman’s tenacious journey to escape poverty and create a billion-dollar farming business — without ever leaving the land she loved.</P>
                <Quote />

            </Container>

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
