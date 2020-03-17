import React from 'react'
import styled from "styled-components";

const Contact = () => {
    return (
        <Footer>
            <Copyright>Copyright {(new Date().getFullYear())} <Link href="https://freyfarms.com/" target="_blank" rel="noopener noreferrer">Frey Farms, LLC</Link><br />111 County Highway 15, Suite A<br />Keenes, IL 62851</Copyright>
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
    font-family: 'Brandon Grotesque Regular';
    color: #fff;
    font-size: 16px;
    text-align: center;
    font-display: auto;
    line-height: 1.5em;
`
const Link = styled.a`
    color: #fff;
    text-decoration: underline;
    &:hover {
        cursor: pointer;
    }
`

export default Contact;