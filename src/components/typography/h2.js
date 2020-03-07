import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const h2 = ({ children, textAlign }) => {
    return (
        <H2 textAlign={textAlign}>{children}</H2>
    );
};

h2.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

h2.defaultProps = {
    textAlign: "left",
};

const H2 = styled.h2`
    text-transform: uppercase;
    font-family: 'Brandon Grotesque';
    color: #000;
    font-weight: 800;
    font-size: 24px;
    text-align: ${props => props.textAlign};
    margin: .1em 0;
    font-display: auto;
    @media (min-width: 800px) {
        font-size: 36px;
    }
    }
`
export default h2;