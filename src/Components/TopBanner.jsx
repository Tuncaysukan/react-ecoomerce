import React from 'react'
import styled from 'styled-components'

const Container=styled.div`

height:40px;
color:white;
background-color: teal;
display: flex;
justify-content: center;
font-size: 20px;
font-weight: 500;
align-items: center;
`
function TopBanner() {
    return (
        <Container>
            <span>Tbt'ye  Özel %50  İndirim </span>
        </Container>
    )
}

export default TopBanner
