import React from 'react'
import styled from "styled-components";

const Header = () => {
    return (
        <Footer>
            <Copyright>The Growing Season</Copyright>
        </Footer>
    );
};

const Footer = styled.footer`
    background-color: #0F5800;
    margin: 0 auto;
`
const Copyright = styled.p`
    padding: 0.35em 0;
    margin: 0;
    font-family: 'Brandon Grotesque Bold';
    text-transform: uppercase;
    color: #fff;
    font-size: 28px;
    text-align: center;
    font-display: auto;
    line-height: 1.5em;
    letter-spacing: .09em;
    @media (min-width: 1400px) {
        font-size: 36px;
    }
`

export default Header;