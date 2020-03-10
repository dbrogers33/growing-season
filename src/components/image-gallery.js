import React from "react";
import styled from "styled-components";

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import Container from "../components/container"
import photos from "../../static/images.json"
import Gallery from "react-photo-gallery"

const ImageGallery = ({  }) => {
    return (
        <section>
            <Container>
                <Wrap>
                    <H3 textAlign="center">Behind the Scenes</H3>
                    <H2 textAlign="center">Pictures from the Farm</H2>
                    <Gallery photos={photos} />
                </Wrap>
            </Container>
        </section>
    )
};
    
const Wrap = styled.div`
    margin: 6em 0;
`

export default ImageGallery
