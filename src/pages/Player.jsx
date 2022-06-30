import * as  React from 'react';
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import video from '../assets/world.mp4'
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";


const Player = () => {


    const navigate = useNavigate()


    const onClickNavigate = useCallback(() => {
        navigate(-1)
    }, [navigate])

    return (
        <Container>
            <div className="player">
                <BsArrowLeft onClick={onClickNavigate} className={'back'}/>
                <video src={video} autoPlay loop controls muted/>
            </div>
        </Container>
    );
};


const Container = styled.div`
    .player{
        width:100vw;
        height:100vh;
        .back{
            position:absolute;
            z-index:1;
            margin:3rem;
            font-size:3rem;
            cursor:pointer;
        }
        video{
            height: 100%;
            width:100%;
            object-fit:cover;
        }
    }
`

export default Player;