import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const paragraph = ({ children, textAlign }) => {
    return (
        <P textAlign={textAlign}>{children}</P>
    );
};

paragraph.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

paragraph.defaultProps = {
    textAlign: "left",
};

const P = styled.p`
    font-family: 'Brandon Grotesque';
    color: #545454;
    font-size: 18px;
    text-align: ${props => props.textAlign};
    font-display: auto;
    line-height: 1.5em;
    @media (min-width: 800px) {
        font-size: 22px;
    }
`
export default paragraph;