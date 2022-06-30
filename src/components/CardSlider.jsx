import * as React from 'react';
import {memo} from "react";
import Card from "./Card";

const CardSlider = memo(({data,title}) => {
    return (
        <div>
            {data.map((movie,index)=><Card key={movie.id - index} movieData={movie}/>)}
        </div>
    );
});

export default CardSlider;