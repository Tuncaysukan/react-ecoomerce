import React from 'react'
import styled from 'styled-components';
import { Search } from "@material-ui/icons";
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// style componen start

const Container = styled.div`
height: 60px;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
align-items: center;
 `
//  left  Start
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language = styled.div`
cursor: pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
padding: 15px;
margin-left: 25px;

`
const Input = styled.input`
border:none;
`
//Left End 

// Center  Start
const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
`






//Left Center 

// Right  Start
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;

`
//Left Right 
// MenuItem Start

const MenuItem = styled.div`
font-size:14px;
margin-left:25px;

`

// MenuItem End


// style componen end  

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color:'gray',fontSize:'16px' }}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TBT ShoP</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sing In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
