import React from 'react'
import styled from "styled-components";

import H3 from "../components/typography/h3"
import Container from '../components/container';

const Contact = ({  }) => {
    return (
        <Container>
        <Border>
            <Content>
                <H3 textAlign="center">Press and Media</H3>
                <Text textAlign="center">To schedule an interview with Sarah Frey please contact:</Text>
                <Text textAlign="center"><strong>Sarah Breivogel</strong></Text>
                <Text textAlign="center">(212) 572-2722</Text>
                <Text textAlign="center"><a href="mailto:sbreivogel@peguinrandhouse.com">sbreivogel@peguinrandhouse.com</a></Text>
            </Content>
        </Border>
        </Container>
    );
};

const Border = styled.div`
    border: 2px #0F5800 solid;
    margin: 0 auto;
    max-width: 700px;
`
const Content = styled.div`
    
    padding: 2em 2em;
    @media (min-width: 500px) {
        padding: 3em 6em;
    }
`

const Text = styled.div`
font-family: 'Brandon Grotesque';
    color: #000;
    font-size: 18px;
    text-align: ${props => props.textAlign};
    font-display: auto;
    line-height: 1.5em;
    @media (min-width: 800px) {
        font-size: 22px;
    }
`


export default Contact;