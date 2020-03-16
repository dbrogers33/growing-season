import React from 'react'
import styled from "styled-components";

import H3 from "../components/typography/h3"

// reference this for facebook source https://github.com/drazik/tcfranconville/blob/master/src/pages/actualite.js

const Post = ({ link, message, media }) => {
    return (
        <Wrap>
            <H3>Sarah Frey</H3>
            <p>{message}</p>
            <p>{media}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View on Facebook</a>
        </Wrap>
    );
};

const Wrap = styled.div`
border: 1px solid #C4C4C4;
     @media (min-width: 600px) {
        width: calc(33% - 4em);
        margin: 1em;
        padding: 1em;
    }
`



export default Post;