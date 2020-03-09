import React from 'react'
import styled from "styled-components";

const Contact = ({  }) => {
    return (
        <Footer>
            <Copyright>Copyright {(new Date().getFullYear())} Frey Farms, LLC</Copyright>
        </Footer>
    );
};

const Footer = styled.footer`
    background-color: #0F5800;
    margin: 0 auto;
`
const Copyright = styled.p`
    padding: 1em 0;
    margin: 0;
    font-family: 'Brandon Grotesque';
    color: #fff;
    font-size: 18px;
    text-align: center;
    font-display: auto;
    line-height: 1.5em;
`

export default Contact;