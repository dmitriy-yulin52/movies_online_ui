import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserLiked from "./pages/UserLiked";


const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path={'/login'} element={<Login/>}/>
                <Route exact path={'/signup'} element={<SignUp/>}/>
                <Route exact path={'/player'} element={<Player/>}/>
                <Route exact path={'/movies'} element={<Movies/>}/>
                <Route exact path={'/tv'} element={<TVShows/>}/>
                <Route exact path={'/mylist'} element={<UserLiked/>}/>
                <Route exact path={'/'} element={<Netflix/>}/>
            </Routes>
        </div>
    );
};

export default App;