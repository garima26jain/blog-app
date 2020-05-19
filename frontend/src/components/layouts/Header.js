import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <MainContainer>
            <h1>
                
            </h1>
        </MainContainer>
    );
};

export default Header
const MainContainer = styled.header`
    background: url(../../public/images/header-bg.jpg) no-repeat center/cover;
    height: 25 rem;

    h1{
        transform: translate(-50%,-50%);
        color: #ffff;
        font-weight: 900;
        position: absolute;
        top: 25%;
        left: 50%;
    }
`;
