import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    //El use navigate es un hook para usarlo luego como una funcion que recibe como argumentos
    //el lugar donde se quiere dirigit y el segundo es un objeto con el repalce, este es para 
    //decidir si se puede volver atras o no una vez se haya navegado a la ruta esperada 
    const onLogin = () => { 

        const lastPath = localStorage.getItem('lastPath') || '/';

        login( 'Yeferson Serna' );

        navigate( lastPath, {
            replace: true
        });
    };


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ onLogin }
            >
                Login
            </button>

        </div>
    );
};
