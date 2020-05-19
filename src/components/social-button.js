import React from 'react'
import styled from "styled-components";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Container = () => {
    return (
        <div>
            <Link href="https://www.instagram.com/sarahfrey___/" target="_blank" rel="noopener noreferrer">
                <SocialButton>
                        <FaInstagram style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.55)" }}/>
                        <AccountName>@Sarah__Frey</AccountName>
                </SocialButton>
            </Link>

            <Link href="https://www.facebook.com/sarah.talley.39" target="_blank" rel="noopener noreferrer">
                <SocialButton>
                        <FaFacebookF style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.55)"}}/>
                        <AccountName>@SarahFrey</AccountName>
                </SocialButton>
            </Link>
        </div>
    );
};

const SocialButton = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.55);
    display: grid;
    grid-template-columns: 1em auto;
    padding: 0.75em 1em;
    margin-top: .5em;
`
const AccountName = styled.p`
    font-family: 'Brandon Grotesque Regular';
    color: #545454;
    font-size: 16px;
    margin: 0;
    padding: 0 0 0 .5em;
`
const Link = styled.a`
    color: 1px solid rgba(0, 0, 0, 0.55);
    text-decoration: none;
    display: inline-block;
    margin:  0 1em 0 0;
    &:hover {
        color: 1px solid rgba(0, 0, 0, 0.55);
    }
    &:visited {
        color: 1px solid rgba(0, 0, 0, 0.55);
    }
`



export default Container;