import * as  React from 'react';
import {memo, useCallback, useState} from "react";
import styled from 'styled-components'
import {URL_IMAGE} from "../utils/constants";
import {useNavigate} from "react-router-dom";


const Card = memo(({movieData}) => {

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
                    <div className="image-vide-container">
                        <img
                            onClick={onClickNavigate}
                            src={`${URL_IMAGE}${movieData.image}`}
                            alt="movie"
                        />
                    </div>
                </div>
            )}
        </Container>
    );
});


const Container = styled.div`

`

export default Card;