import React from 'react'
import styled from "styled-components";

import H3 from "../components/typography/h3"
import Container from '../components/container';
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"

export default () => (
    <StaticQuery
      query={graphql`
        query {
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
        <Container>
            <Border>
                <Content>
                    <H3 textAlign="center">Press and Media</H3>
                    <Text textAlign="center">For media inquires and permissions:</Text>
                    <Name textAlign="center">Lisa Proctor</Name>
                    <Text textAlign="center">(615) 477-5066</Text>
                    <Text textAlign="center"><a href="mailto:lisaproctor@freyfarms.com">lisaproctor@freyfarms.com</a></Text>
                </Content>
               
                <Img
                    fixed={data.vine.childImageSharp.fixed}
                    alt='The Growing Season by Sarah Frey'
                    style={{ position: "absolute", right: "0", bottom: "0" }}
                />
               
            </Border>
        </Container>
    )}
    />
  )

const Border = styled.div`
    border: 2px #0F5800 solid;
    margin: 0 auto;
    max-width: 700px;
    margin-bottom: 5em;
    position: relative;
`

const Content = styled.div`
    padding: 3em 2em 7em 2em;
    @media (min-width: 500px) {
        padding: 3em 6em;
    }
`
const Text = styled.div`
    font-family: 'Brandon Grotesque Regular';
    color: #000;
    font-size: 16px;
    text-align: ${props => props.textAlign};
    font-display: auto;
    line-height: 1.5em;
    @media (min-width: 1200px) {
        font-size: 20px;
    }
`

const Name = styled.div`
    font-family: 'Brandon Grotesque Bold';
    color: #000;
    font-size: 16px;
    text-align: ${props => props.textAlign};
    font-display: auto;
    line-height: 1.5em;
    @media (min-width: 1200px) {
        font-size: 20px;
    }
`
