import React from "react";
import styled from "styled-components";

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"
import Container from "../components/container"

const Hero = ({  }) => {
    return (
        <section>
            <Container>
                <Content>
                    <H3 textAlign="center">ABOUT THE BOOK</H3>
                    <H2 textAlign="center">HOW SARAH SAVED AN AMERICAN FARM</H2>
                    <P textAlign="center">The youngest of her parents’ twenty-one children, Sarah Frey grew up on a struggling farm in Southern Illinois, often having to grow, catch, or hunt her own dinner alongside her brothers. She spent much of her early childhood dreaming of running away to the big city or really anywhere with central heat. At fifteen, she moved out of her family home and started her own fresh produce delivery business with nothing more than an old pickup truck. Two years later, when the family farm faced inevitable foreclosure, Sarah gave up her dreams of escape, took over the farm and started her own produce company. Refusing to play by the traditional rules, Sarah talked her way into suit-filled boardrooms at seventeen, made deals with the nation’s largest retailers, and fostered legendary negotiations that led Harvard Business School to publish their most popular case study. Filled with grit and grace, The Growing Season: How I Saved an American Farm — and Built a New Life tells the inspiring story of how a scrappy rural childhood game Sarah the resiliency to take risks that paid off in unexpected ways.</P>
                    <P textAlign="center">Twenty-seven years and running, Sarah’s family-operated company, Frey Farms, has sold more than a billion dollars’ worth of fresh produce and beverages, and has become one of America’s largest fresh produce growers and suppliers, with farmland across seven states. Through innovation and sustainable farming practices, the company is committed to helping climate food waste and giving back to the land. Thanks to the millions of melons and pumpkins she sells annually, Sarah has been dubbed “America’s Pumpkin Queen” by the national press.</P>
                    <P textAlign="center">Rather than leaving her community, Sarah found adventure and opportunity in one of the most forgotten parts of our country. With fearlessness and creativity, she literally dug her destiny out of the dirt.</P>
                </Content>
            </Container>
        </section>
    );
};

const Content = styled.div`
    margin: 2em 0;
`

export default Hero;