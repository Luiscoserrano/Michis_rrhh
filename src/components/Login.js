import React from 'react';
import './Login.css';

import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'


// context api
//import { auth, provider } from '../../firebase'
import { useStateValue } from '../state/provider'
import { actionTypes } from '../state/reducer'

// images and icons
import Michis_logo from './imagenes/Michis2.png';
import { Button } from 'reactstrap';
import Footer from './Footer';

const Login = () => {
    const [state, dispatch] = useStateValue();
    const [open, setOpen] = React.useState({
        open: true
      });

    const [values, setValues] = React.useState({
          usuario: "",
          password: "",
        });
    
    function handleChange(evt) {
        /*
        evt.target es el elemento que ejecuto el evento
        name identifica el input y value describe el valor actual
        */
        const { target } = evt;
        const { name, value } = target;
        /*
        Este snippet:
        1. Clona el estado actual
        2. Reemplaza solo el valor del
            input que ejecutó el evento
        */
        const newValues = {
            ...values,
            [name]: value,
            };
        // Sincroniza el estado de nuevo
        setValues(newValues);
    }
    

    const signIn = (evt) => {
         /*
        Previene el comportamiento default de los
        formularios el cual recarga el sitio
        */
        evt.preventDefault();
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
        if ((values.usuario == 'JMONTERO') && (values.password == '1234')){
        //if (1==1){
            dispatch({
                type: actionTypes.SET_USER,
                user: {displayName:values.usuario,
                    photoURL: 'https://i.pinimg.com/736x/fa/53/b1/fa53b16145fbcdbb62249ef20bcbab12.jpg'
                },

            })
        }else{
            console.log('Usuario no valido')
            setOpen(true)
        }
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      

    const handleClose = (event, reason) => {
        setOpen(false);
    };

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
                                    <form className="user" onSubmit={signIn}>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user"
                                                id="InputUsuario" aria-describedby=""
                                                name='usuario'
                                                value={values.usuario}
                                                onChange={handleChange}
                                                placeholder="Usuario"/>                                        
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                name='password'
                                                value={values.password}
                                                onChange={handleChange}
                                                id="Inputpassword" placeholder="Contraseña"/>
                                        </div>
                                        <Button type="submit" block color="primary">Ingresar</Button>
                                    </form>
                                    <hr/>
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Olvido su clave?</a>
                                    </div>
                                </div>
                        
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                        Usuario o clave no valido.
                                    </Alert>
                                </Snackbar>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </div>
    <Footer></Footer>

        </div>
        
    )
}

export default Login;