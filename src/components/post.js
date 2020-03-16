import React from 'react'
import styled from "styled-components";

const Post = ({ children }) => {
    return (
        <Wrap>{children}</Wrap>
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