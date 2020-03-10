import React from 'react'
import styled from "styled-components";
import P from "../components/typography/p"


const Quote = ({  }) => {
    return (

            <Wrap>
                <P>“A supremely practical and useful book. Sarah Frey distills the most fundamental information about habit formation, so you can accomplish more by focusing on less.”</P>
                <Author>— Opray Winfrey</Author>
                <Credentials>Television Host and New York Times Best Seller </Credentials>
            </Wrap>
        
    );
};

const Wrap = styled.div`
    padding: 1em;
    background: #F7FCF9;
`
const Author = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
    font-family: 'Brandon Grotesque Bold';
`
const Credentials = styled.p`
    font-size: 14px;
    font-family: 'Brandon Grotesque Regular';
`


export default Quote;