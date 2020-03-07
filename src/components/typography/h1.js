import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const h1 = ({ children, textAlign }) => {
    return (
        <H1 textAlign={textAlign}>{children}</H1>
    );
};

h1.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

h1.defaultProps = {
    textAlign: "left",
};

const H1 = styled.h1`
    text-transform: uppercase;
    font-family: 'Brandon Grotesque';
    color: #000;
    font-weight: 800;
    font-size: 24px;
    text-align: ${props => props.textAlign};
    margin: .1em 0;
    @media (min-width: 800px) {
        font-size: 50px;
    }
`
export default h1;