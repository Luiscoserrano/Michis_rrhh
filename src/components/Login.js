import React from 'react';
import './Login.css';

// context api
//import { auth, provider } from '../../firebase'
import { useStateValue } from '../state/provider'
import { actionTypes } from '../state/reducer'

// images and icons
import Michis_logo from './imagenes/Michis2.png';
import { Button } from 'reactstrap';

const Login = () => {
    const [state, dispatch] = useStateValue();

    

    const signIn = () => {
        // sign in
       /* auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
            console.log(result);
        })
        .catch(error => alert(error.message))*/
        dispatch({
            type: actionTypes.SET_USER,
            user: {displayName:'Megumin',
                photoURL: 'https://i.pinimg.com/736x/fa/53/b1/fa53b16145fbcdbb62249ef20bcbab12.jpg'
            },

        })
    }

    return (
        <div className='container'>
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="loginLogo">
                                    <img src={Michis_logo} alt="Michi´s"/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="usuario" className="form-control form-control-user"
                                                id="InputUsuario" aria-describedby=""
                                                placeholder="Ingrese un usuario valido..."/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" for="customCheck">Recordar</label>
                                            </div>
                                        </div>
                                        <Button type="submit" onClick={signIn} active block color="primary">Ingresar</Button>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Olvido su clave?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </div>

            
        </div>
    )
}

export default Login;