import * as React from 'react';
import styled from 'styled-components'
import {memo} from "react";
import {useDispatch} from "react-redux";
import {fetchDataByGenre} from "../store/netflix/actions";


const SelectGenre = memo(({genres,type}) => {

    const dispatch = useDispatch()


    return (
        <Select className={'flex'} onChange={(e)=>dispatch(fetchDataByGenre({genre:e.target.value,type}))}>
            {genres.map((genre)=><option value={genre.id} key={genre.id}>{genre.name}</option>)}
        </Select>
    );
});


const Select = styled.select`

`

export default SelectGenre;