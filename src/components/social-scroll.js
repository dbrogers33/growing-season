import React from 'react'
import styled from "styled-components";

// facebook page id 120728004620479
// facebook key 833ccdb001ca14a98bb98aee9e35095a

const Container = ({ children }) => {
    return (
        <Wrap>{children}</Wrap>
    );
};

const Wrap = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 1400px;
`



export default Container;