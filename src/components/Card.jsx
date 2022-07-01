import * as  React from 'react';
import {memo, useCallback, useState} from "react";
import styled from 'styled-components'
import {URL_IMAGE} from "../utils/constants";
import {useNavigate} from "react-router-dom";
import video  from '../assets/world.mp4'
import {IoPlayCircleSharp} from 'react-icons/io5'
import {RiThumbUpFill,RiThumbDownFill} from 'react-icons/ri'
import {BsCheck} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'


const Card = memo(({movieData,isLiked = false}) => {

    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false)


    const onMouseEnterHandler = useCallback(() => {
        setIsHovered(true)
    }, [setIsHovered])
    const onMouseLeaveHandler = useCallback(() => {
        setIsHovered(false)
    }, [setIsHovered])
    const onClickNavigate = useCallback(() => {
        navigate('/player')
    }, [navigate])

    return (
        <Container onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <img src={`${URL_IMAGE}${movieData.image}`} alt="movie"/>
            {isHovered && (
                <div className={'hover'}>
                    <div className="image-video-container">
                        <img
                            onClick={onClickNavigate}
                            src={`${URL_IMAGE}${movieData.image}`}
                            alt="movie"
                        />
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            onClick={onClickNavigate}
                        />
                    </div>
                    <div className="info-container flex column">
                        <h3 className="name" onClick={onClickNavigate}>
                            {movieData.name}
                        </h3>
                        <div className="icons flex j-between">
                            <div className="controls flex">
                                <IoPlayCircleSharp title={'play'} onClick={onClickNavigate}/>
                                <RiThumbUpFill title={'like'}/>
                                <RiThumbDownFill title={'Dislike'}/>
                                {isLiked ? (<BsCheck title={'Remove From List'}/>):
                                            (<AiOutlinePlus title={'Add to my list'}/>)
                                }
                            </div>
                            <div className="info">
                                <BiChevronDown title={'More Info'}/>
                            </div>
                        </div>
                        <div className="genres flex">
                            <ul className="flex">{movieData.genres.map((genre,index)=><li key={genre}>{genre}</li>)}</ul>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
});


const Container = styled.div`
max-width:230px;
width:230px;
height:100%;
cursor:pointer;
position:relative;
img{
    border-radius:0.2rem;
    width:100%;
    height:100%;
    z-index:10;
}
.hover{
    z-index:90;
    height:max-content;
    width:300px;
    position:absolute;
    top:-24vh;
    border-radius:0.3rem;
    background-shadow:rgba(0,0,0,0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container{
        position:relative;
        height:140px;
        img{
            width:100%;
            height:140px;
            object-fit:cover;
            border-radius:0.3rem;
            top:0;
            z-index:4;
            position:absolute;

        }
        video{
            width:100%;
            height:140px;
            object-fit:cover;
            border-radius:0.3rem;
            top:0;
            z-index:5;
            position:absolute;
        }
    }
    .info-container{
        padding:1rem;
        gap:0.5rem;
    }
    .icons{
        .controls{
            display:flex;
            gap:1rem;
        }
        svg{
            font-size:2rem;
            cursor:pointer;
            transition: 0.3s ease-in-out;
            &:hover{
                color: #b8b8b8;
            }
        }
    }
    .genres{
        ul{
            gap:1rem;
            li{
                padding-right:0.7rem;
                &:first-of-type{
                    list-style-type:none;
                }
            }
        }
    }
}
`

export default Card;