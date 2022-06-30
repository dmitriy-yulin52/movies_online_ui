import React, {memo, useCallback, useState} from 'react';
import styled from 'styled-components'
import logo from '../assets/logo.png'
import {Link, useNavigate} from "react-router-dom";
import {FaPowerOff, FaSearch} from "react-icons/fa";
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {firebaseAuth} from "../utils/firebase-config";

const Links = [
    {name: 'Home', link: '/'},
    {name: 'TV Shows', link: '/tv'},
    {name: 'Movies', link: '/movies'},
    {name: 'My List', link: '/mylist'},
]


function signOutHandler() {
    return signOut(firebaseAuth)
}

const NavBar = memo(({isScrolled}) => {

    const [showSearch, setShowSearch] = useState(false)
    const [inputHover, setInputHover] = useState(false)

    const navigate = useNavigate()


    const onFocusShowSearch = useCallback(() => {
        setShowSearch(true)
    }, [setShowSearch])
    const onBlurShowSearch = useCallback(() => {
        if (!inputHover) setShowSearch(false)
    }, [setShowSearch, inputHover])
    const onMouseEnterInputHover = useCallback(() => {
        setInputHover(true)
    }, [setInputHover])
    const onMouseLeaveInputHover = useCallback(() => {
        setInputHover(false)
    }, [setInputHover])
    const onBlurInputHandler = useCallback(() => {
        setShowSearch(false)
        setInputHover(false)
    }, [setInputHover, setShowSearch])


     onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate('/login')
    })


    return (
        <Container>
            <nav className={`flex ${isScrolled ? 'scrolled' : ''}`}>
                <div className="left flex a-center">
                    <div className="brand flex a-center j-center">
                        <img src={logo} alt=""/>
                    </div>
                    <ul className="links flex">
                        {Links.map((el) => <li key={el.name}><Link to={el.link}>{el.name}</Link></li>)}
                    </ul>
                </div>
                <div className="right flex a-center">
                    <div className={`search ${showSearch ? 'showSearch' : ''}`}>
                        <button onFocus={onFocusShowSearch} onBlur={onBlurShowSearch}>
                            <FaSearch/>
                        </button>
                        <input
                            type="text"
                            placeholder={'Search'}
                            onMouseEnter={onMouseEnterInputHover}
                            onMouseLeave={onMouseLeaveInputHover}
                            onBlur={onBlurInputHandler}
                        />
                    </div>
                    <button onClick={signOutHandler}><FaPowerOff/></button>
                </div>
            </nav>
        </Container>
    );
});


const Container = styled.div`
.scrolled{
    background-color:black;
}
nav {
    position:fixed;
    top:0;
    height:6.5rem;
    width:100%;
    justify-content: space-between;
    z-index:2;
    align-items:center;
    transition: 0.3s ease-in-out;
    .left{
         margin-left:3rem;
        gap:2rem;
        .brand{
            img{
                height:4rem;
            }
        }
        .links{
            list-style-type:none;
            gap:2rem;
            li{
                a{
                    color:white;
                    text-decoration:none;
                }
            }
        }
    }
    .right{
        margin-right:3rem;
        gap:1rem;
        button{
            background-color:transparent;
            border:none;
            cursor:pointer;
            &:focus{
                outline:none;
            }
            svg{
                color:#f34242;
                font-size:1.2rem;
            }
        }
        .search{
            display:flex;
            gap:0.4rem;
            align-items:center;
            justify-content:center;
            padding:0.2rem;
            padding-left:0.5rem;
            button{
                background-color:transparent;
                svg{
                    color:white;
                    cursor:pointer;
                }
            }
            input{
                width:0px;
                opacity:0;
                transition: 0.2s ease-in-out;
                visibility:hidden;
                background-color:transparent;
                border:none;
                color:white;
                &:focus{
                    outline:none;
                }
            }
        }
        .showSearch{
            border:1px solid white;
            background-color: rgba(0,0,0,0.5);
            input{
                width:100%;
                opacity:1;
                visibility:visible;
                padding:0.3rem;
            }
        }
    }
}
`

export default NavBar;