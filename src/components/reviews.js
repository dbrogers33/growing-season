import React from 'react'
import styled from "styled-components";

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"
import Container from "../components/container"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Reviews = () => {
    return (
        <section>
            {/* Desktop Version */}
            <Desktop>
                <Container>
                    <H3 textAlign="center">What people are saying</H3>
                    <H2 textAlign="center">Reviews</H2>

                    <Carousel>
                        
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={2}
                        totalSlides={6}
                        infinite="true"
                        isIntrinsicHeight="true"
                        visibleSlides={3}
                    >
                        <Slider>
                            <Slide index={0}></Slide>
                            <Slide index={1}><P textAlign="center">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "</P></Slide>
                            <Slide index={2}><P textAlign="center">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</P></Slide>
                            <Slide index={3}><P textAlign="center">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</P></Slide>
                            <Slide index={4}><P textAlign="center">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</P></Slide>
                            <Slide index={5}><P textAlign="center">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</P></Slide>
                        </Slider>
                        <Buttons>
                            <NewButtonBack><img src="/arrow.png" alt="back arrow" /></NewButtonBack>
                            <NewButtonNext style={{ float: "right" }}><img src="/arrow.png" alt="next arrow" /></NewButtonNext>
                        </Buttons>
                    </CarouselProvider>
                    <Gradient></Gradient>
                    </Carousel>
                </Container>
            </Desktop>

            {/* Mobile Version */}
            <Mobile>
                <Container>
                    <H3 textAlign="center">What people are saying</H3>
                    <H2 textAlign="center">Reviews</H2>

                    <Carousel>
                        
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={2}
                        totalSlides={5}
                        infinite="true"
                        isIntrinsicHeight="true"
                        visibleSlides={1}
                    >
                        <Quotes>
                        <Slider>
                            <Slide index={0}><P textAlign="center">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "</P></Slide>
                            <Slide index={1}><P textAlign="center">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</P></Slide>
                            <Slide index={2}><P textAlign="center">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</P></Slide>
                            <Slide index={3}><P textAlign="center">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</P></Slide>
                            <Slide index={4}><P textAlign="center">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</P></Slide>
                        </Slider>
                        </Quotes>
                        <Buttons>
                        <NewButtonBack><img src="/arrow.png" alt="back arrow" /></NewButtonBack>
                            <NewButtonNext style={{ float: "right" }}><img src="/arrow.png" alt="next arrow" /></NewButtonNext>
                        </Buttons>
                    </CarouselProvider>
                    </Carousel>
                </Container>
            </Mobile>
        </section>
    );
};

const Desktop = styled.div`
    @media (max-width: 1199px) {
        display: none;
    }
`
const Mobile = styled.div`
    @media (min-width: 1200px) {
        display: none;
    }
`

const Quotes = styled.div`
    width: 80%;
    margin: 0 auto;
`

const NewButtonBack = styled(ButtonBack)`
    border: none;
    background: rgba(0,0,0,0);
    transform: rotate(180deg);
    &:focus {
        border: none;
        outline: 0;
    }
`

const NewButtonNext= styled(ButtonNext)`
    border: none;
    background: rgba(0,0,0,0);
    &:focus {
        border: none;
        outline: 0;
    }
`

const Buttons = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: 1;
`

const Carousel = styled.div`
    position: relative;
    
`
const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 90%);
`


export default Reviews;