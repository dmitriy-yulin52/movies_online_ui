import * as  React from 'react';
import styled from 'styled-components'
import {useCallback, useState} from "react";
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {firebaseAuth} from "../utils/firebase-config";
import {useNavigate} from 'react-router-dom'
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const onChangeEmailValue = useCallback((e) => {
        setFormValues({...formValues, email: e.currentTarget.value})
    }, [setFormValues, formValues])
    const onChangePasswordValue = useCallback((e) => {
        setFormValues({...formValues, password: e.currentTarget.value})
    }, [setFormValues, formValues])
    const onClickShowPassword = useCallback(() => {
        setShowPassword(true)
    }, [setShowPassword])


    const handleLogin = async () => {
        try {
            const {email, password} = formValues
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        } catch (err) {
            console.log(err)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate('/')
    })


    return (
        <Container showPassword={showPassword}>
            <BackgroundImage/>
            <div className="content">
                <Header/>
                <div className="form-container flex column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <div className="title">
                            <h3>login</h3>
                        </div>
                        <div className="container flex column">
                            <input type="email" placeholder={'Email Address'} name={'email'}
                                   value={formValues.email} onChange={onChangeEmailValue}/>
                            <input type="password" placeholder={'Password'} name={'password'}
                                   value={formValues.password} onChange={onChangePasswordValue}/>
                            <button onClick={handleLogin}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};


const Container = styled.div`
position:relative;
.content{
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display:grid;
    grid-template-rows: 15vh 85vh;
    .form-container{
        gap:2rem;
        height: 85vh;
        .form{
            background-color:#000000b0;
            padding:2rem;
            width:25vw;
            gap:2rem;
            color:white;
            .container{
                gap:2rem;
                input{
                    padding:0.5rem 1rem;
                    width:15rem;
                }
                button{
                    padding: 0.5rem 1rem;
                    background-color:#e50914;
                    border:none;
                    cursor:pointer;
                    color:white;
                    font-weight: bolder;
                    font-size: 1.05rem;
                }
            }
        }
    }
}
`

export default SignUp;