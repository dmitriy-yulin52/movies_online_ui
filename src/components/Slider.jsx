import * as React from 'react';
import {memo} from "react";
import CardSlider from "./CardSlider";


function getMoviesFromRange(movies,from,to){
    return movies.slice(from,to)
}


const Slider = memo(({movies,loadingMovies}) => {

    return (
        <div>
            <CardSlider title={'Trending Now'} data={getMoviesFromRange(movies,0,10)}/>
            <CardSlider title={'New Releases'} data={getMoviesFromRange(movies,10,20)}/>
            <CardSlider title={'Blockbuster Movies'} data={getMoviesFromRange(movies,20,30)}/>
            <CardSlider title={'Popular On Netflix'} data={getMoviesFromRange(movies,30,40)}/>
            <CardSlider title={'Action Movies'} data={getMoviesFromRange(movies,40,50)}/>
            <CardSlider title={'Epics'} data={getMoviesFromRange(movies,50,60)}/>
        </div>
    );
});

export default Slider;