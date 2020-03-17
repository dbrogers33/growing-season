import React from 'react'
import styled from "styled-components";

import H3 from "../components/typography/h3"

// reference this for facebook source https://github.com/drazik/tcfranconville/blob/master/src/pages/actualite.js

const Post = ({ link, message, media, time, profilePic, test }) => {
    return (
        <Wrap>
            <Grid>
                <Profile profilePic={profilePic}></Profile>
                <div>
                    <H3>Sarah Frey</H3>
                    <Time>{time}</Time>
                </div>
            </Grid>
            <p>{test}</p>
            <Message>{message}</Message>
            <img src={media} />
            <FacebookLink href={link} target="_blank" rel="noopener noreferrer">View on Facebook</FacebookLink>
        </Wrap>
    );
};

const Wrap = styled.div`
    border: 1px solid #C4C4C4;
    padding: 2em;
     @media (min-width: 600px) {
        
    }
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 3em auto;
    grid-gap: 1em;
`
const Time = styled.p`
    margin: -.35em 0;
    font-family: 'Brandon Grotesque Regular';
    color: #545454;
    font-size: 14px;
`

const Profile = styled.div`
    width: 3em;
    height: 3em;
    background: black;
    border-radius: 1.5em;
    border: 1px #545454 solid;
    background-image: url(${props => props.profilePic});
    background-size: cover;
    background-position: 50% 50%;
`
const FacebookLink = styled.a`
    font-family: 'Brandon Grotesque Regular';
    color: #0F5800;
    font-size: 14px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const Message = styled.p`
    font-family: 'Brandon Grotesque Regular';
    color: #545454;
    font-size: 16px;
    text-align: ${props => props.textAlign};
    font-display: auto;
    line-height: 1.45em;
    @media (min-width: 1200px) {
        font-size: 18px;
    }
`


export default Post;