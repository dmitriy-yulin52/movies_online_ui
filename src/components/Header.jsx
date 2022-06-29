import * as  React from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import {memo, useCallback} from "react";

const Header = memo((props) => {

    const navigate = useNavigate()


    const onClickNavigate = useCallback(() => {
        navigate(props.login ? '/login' : 'signup')
    }, [navigate,props.login])

    return (
        <Container className={'flex a-center j-between'}>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <button onClick={onClickNavigate}>
                {props.login ? 'Log In' : 'Sign in'}
            </button>
        </Container>
    );
});


const Container = styled.div`
padding: 0 64px;
    .logo{
        img{
            height: 5rem;
        }
    }
    button{
        padding: 0.5rem 1rem;
        background-color:#e50914;
        border:none;
        cursor:pointer;
        color:white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
    }
`

export default Header;