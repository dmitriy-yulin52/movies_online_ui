import * as React from 'react';
import styled from 'styled-components'
import {memo, useCallback} from "react";
import {useDispatch} from "react-redux";
import {fetchDataByGenre} from "../store/netflix/actions";


const SelectGenre = memo(({genres,type}) => {

    const dispatch = useDispatch()


    const onChangeHandler = useCallback((e)=>{
        dispatch(fetchDataByGenre({genres,genre:e.target.value,type}))
    },[fetchDataByGenre])

    console.log(genres)


    return (
        <Select className={'flex'} onChange={onChangeHandler}>
            {genres.map((genre)=><option value={genre.id} key={genre.id}>{genre.name}</option>)}
        </Select>
    );
});


const Select = styled.select`
margin-left:5rem;
cursor:pointer;
font-size:1.4rem;
background-color:rgba(0,0,0,0.4);
color:white;

`

export default SelectGenre;