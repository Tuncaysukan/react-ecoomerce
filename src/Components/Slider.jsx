import React from 'react'
import styled from 'styled-components'
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';

const Containter = styled.div`
height: 100vh;
width: 100%;
display: flex;
background-color: coral;
position: relative;

`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.50;
`;

const Wrapper = styled.div`
height: 100%;
`;
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;

`;
const ImgContainer = styled.div`
flex:1;`;
const Image = styled.img`
height:80%`;
const InfoContainer = styled.div`
flex:1;`;

export const Slider = () => {
    return (
        <Containter>
            <Arrow direction='left'>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper>
                <Slide>
                <ImgContainer>
                    <Image src='https://i.ibb.co/XsdmR2c/1.png' />
                </ImgContainer>
                <InfoContainer></InfoContainer>
                </Slide>
            </Wrapper>

            <Arrow direction='right'>
                <ArrowRightOutlinedIcon />
            </Arrow>


        </Containter>
    )
}
