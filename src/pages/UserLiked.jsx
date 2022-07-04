import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, getGenres, getUserLikedMovies} from "../store/netflix/actions";
import {onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../utils/firebase-config";
import styled from 'styled-components'
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import {useCallback, useEffect, useState} from "react";

const UserLiked = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isScrolled, setIsScrolled] = useState(false)
    const [email, setEmail] = useState(undefined)

    const movies = useSelector((state) => state.netflix.movies)


    const onClickNavigate = useCallback(() => {
        navigate('/player')
    }, [navigate])


    useEffect(() => {
        if (email) {
            dispatch(getUserLikedMovies(email))
        }
    }, [email])


    window.onscroll = () => {
        setIsScrolled(window.pageYOffset !== 0)
        return () => window.onscroll = null
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email)
        else navigate('/login')
    })


    return (
        <Container>
            <NavBar isScrolled={isScrolled}/>
            <div className={'content flex column'}>
                <h1>My list</h1>
                <div className={'grid flex'}>
                    {movies.map((movie,index)=><Card movieData={movie} index={index} key={movie.id} isLiked={true}/>)}
                </div>
            </div>
        </Container>
    );
};


const Container = styled.div`
.content{
    margin:2.3rem;
    margin-top:8rem;
    gap:4rem;
    h1{
        margin-left:3rem;
    }
    .grid{
        flex-wrap:wrap;
        gap:1rem;
    }
}
`

export default UserLiked;