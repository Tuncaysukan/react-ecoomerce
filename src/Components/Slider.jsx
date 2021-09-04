import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';

const Containter = styled.div`
height: 100vh;
width: 100%;
display: flex;
position: relative;
overflow: hidden;

`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
position: absolute;
justify-content: center;
top: 0;
bottom: 0;
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.50;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(0vw);
`;
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};

`;
const ImgContainer = styled.div`
height: 100%;
flex:1;`;
const Image = styled.img`

height:80%`;
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;
const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding:10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border-radius: 20%;
`;

export const Slider = () => {
    const [slideIndex,setSlidex]=useState(0)
    const  handelClick=(direction)=>{
        
    };
    return (
        <Containter>
            <Arrow direction='left' onClick={()=>handelClick('left')}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper>
           
                <Slide bg='f5fafd'>
                    <ImgContainer>
                        <Image src='https://i.ibb.co/XsdmR2c/1.png' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>TBT Kampanyası</Title>
                        <Desc>Lorem ipsum dolor sit amet,</Desc>
                        <Button>Mağza</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg='f5f1ed'>
                    <ImgContainer>
                        <Image src='https://i.ibb.co/XsdmR2c/1.png' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Yaz Kampanyası</Title>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos repellendus accusamus quibusdam corrupti alias nemo vel laborum nihil ipsa dolores necessitatibus, perferendis hic amet magnam, sapiente labore debitis animi totam.</Desc>
                        <Button>Mağza</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg='f5f0f4'>
                    <ImgContainer>
                        <Image src='https://i.ibb.co/XsdmR2c/1.png' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>TBT-2 Kampanyası</Title>
                        <Desc>Lorem ipsum dolor sit amet,</Desc>
                        <Button>Mağza</Button>
                    </InfoContainer>
                </Slide>
            
               </Wrapper>

            <Arrow direction='right' onClick={()=>handelClick('right')}>
                <ArrowRightOutlinedIcon />
            </Arrow>


        </Containter>
    )
}
