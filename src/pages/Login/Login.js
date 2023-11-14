import '../../Styles/Login.css';
import { useState } from 'react';
import logo from '../../img/SPORT.png';

const LoginRender = () => {

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();

    const getSenha = (event) => {
        setSenha(event.target.value)
    }

    const getUsuario = (event) =>{
        setUsuario(event.target.value)
    }

    const ValidaUsuario = async (usuario, senha) => {
        const response = await fetch('https://sportapi-kgby.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: usuario,
                senha: senha
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    }

    return(
        <div className='container'>
            <div className='containerLogin'>
                <img src={logo} alt="Erro ao carregar a imagem logo"/>
                <div className='formContainer'>
                    <form>
                        <div className='inputContainer'>
                            <input type='text' id="inpUsuario" className='inpDadosUsuario' onChange={(event) => getUsuario(event)} autoComplete='off' required/>
                            <label>Nome ou e-mail</label>
                        </div>
                        <div className='inputContainer'>
                            <input type='password' id='inpSenha' className='inpDadosUsuario' onChange={(event) => getSenha(event)} autoComplete='off' required/>
                            <label>Senha</label>
                        </div>
                        <button type='button' className='btnEntrar' onClick={() => ValidaUsuario(usuario, senha)}>Entrar</button>
                        <span>Não tem uma conta? <a href='/Cadastro'>Cadastre-se</a></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginRender;
