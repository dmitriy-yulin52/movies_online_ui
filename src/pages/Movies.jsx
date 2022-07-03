import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, getGenres} from "../store/netflix/actions";
import {useCallback, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../utils/firebase-config";
import styled from 'styled-components'
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";

const Movies = () => {

    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false)

    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
    const movies = useSelector((state) => state.netflix.movies)
    const genres = useSelector((state) => state.netflix.genres)


    const onClickNavigate = useCallback(() => {
        navigate('/player')
    }, [navigate])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({type: 'movies'}))
    }, [genresLoaded])


    window.onscroll = () => {
        setIsScrolled(window.pageYOffset !== 0)
        return () => window.onscroll = null
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if (currentUser) navigate('/')
    })


    return (
        <Container>
            <div className="navbar">
                <NavBar isScrolled={isScrolled}/>
            </div>
            <div className="data">
                <SelectGenre genres={genres} type={'movie'}/>
                {movies.length ? <Slider movies={movies}/> : <NotAvailable/>}
            </div>
        </Container>
    );
};


const Container = styled.div`
.data{
    margin-top:8rem;
    .not-available{
        text-align:center;
        color:white;
        margin-top:4rem;
    }
}

`


export default Movies;