import * as React from 'react';
import {memo, useCallback, useRef, useState} from "react";
import Card from "./Card";
import styled from 'styled-components'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const CardSlider = memo(({data, title}) => {

    const [showControls, setShowControls] = useState(false)
    const [sliderPosition, setSliderPosition] = useState(0)
    const listRef = useRef()


    const onMouseEnterHandler = useCallback(() => {
        setShowControls(true)
    }, [setShowControls])
    const onMouseLeaveHandler = useCallback(() => {
        setShowControls(false)
    }, [setShowControls])

    const handleDirection = useCallback((direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 70;
        if (direction === "left" && sliderPosition > 0) {
            listRef.current.style.transform = `translateX(${270 + distance}px)`;
            setSliderPosition(sliderPosition - 1);
        }
        if (direction === "right" && sliderPosition < 4) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSliderPosition(sliderPosition + 1);
        }
    }, [sliderPosition, setSliderPosition]);


    return (
        <Container
            className={'flex column'}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}

        >
            <h1>{title}</h1>
            <div className="wrapper">
                <div className={`slider-action left ${!showControls ? 'none' : ''} flex j-center a-center`}>
                    <AiOutlineLeft onClick={() => handleDirection('left')}/>
                </div>
                <div className={'flex slider'} ref={listRef}>
                        {data.map((movie, index) => <Card key={movie.id - index} movieData={movie}/>)}
                </div>
                <div className={`slider-action right ${!showControls ? 'none' : ''} flex j-center a-center`}>
                    <AiOutlineRight onClick={() => handleDirection('right')}/>
                </div>
            </div>
        </Container>
    );
});


const Container = styled.div`
gap:1rem;
position:relative;
padding:2rem 0;
z-index:1000;
h1{
    margin-left:50px;
}
.wrapper{
    .none{
        display:none;
    }
    .left{
        cursor:pointer;
        position:absolute;
        left:0;
        z-index:100;
    }
    .right{
        cursor:pointer;
        position:absolute;
        right:0;
        z-index:100;
    }
    .slider{
        width:max-content;
        gap:1rem;
        transform:translateX(0px);
        transition:0.7s ease-in-out;
        margin-left:50px;
    }
    .slider-action{
        position:absolute;
        z-index:99;
        height:100%;
        top:20px;
        bottom:0;
        width:50px;
        svg{
            font-size:2rem;
        }
    }
}

`

export default CardSlider;