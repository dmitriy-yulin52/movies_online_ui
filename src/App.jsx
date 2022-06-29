import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Netflix from "./pages/Netflix";


const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path={'/login'} element={<Login/>}/>
                <Route exact path={'/signup'} element={<SignUp/>}/>
                <Route exact path={'/'} element={<Netflix/>}/>
            </Routes>
        </div>
    );
};

export default App;