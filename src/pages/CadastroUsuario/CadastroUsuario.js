import { useState } from 'react';
import '../../Styles/CadastroUsuario.css';
import UserServices from '../../Services/UserServices';

const services = new UserServices;

const CadastroRender = () =>{

    const[nome, setNome] = useState();
    const[email, setEmail] = useState();
    const[telefone, setTelefone] = useState();
    const[senha, setSenha] = useState();

    const getNome = (event) => {
        setNome(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getTelefone = (event) =>{
        setTelefone(event.target.value)
    }

    const getSenha = (event) =>{
        setSenha(event.target.value)
    }

    return(
        <div className='container'>
            <div className='containerCadastro'>
                <div className='containerPropaganda'>
                    <div className='colorOverlay'>
                    
                    </div>
                </div>
                <div className='containerForm'>
                    <div className='logoContainer'>
                        <span>SPORT <span>SPHERE</span></span>
                        <label>Desperte Seu Espírito Competitivo. Transforme-se na SportSphere!</label>
                    </div>
                    <div className='formInputs'>
                        <form>
                            <div>
                                <input type='text' id="inpUsuario" className='inpDadosUsuario' onChange={(event) => getNome(event)} autoComplete='off' required/>
                                <label>Digite seu nome</label>
                            </div>
                            <div>
                                <input type='text' id="inpEmail" className='inpDadosUsuario' onChange={(event) => getEmail(event)} autoComplete='off' required/>
                                <label>Digite seu e-mail</label>
                            </div>
                            <div>
                                <input type='text' id="inpTelefone" className='inpDadosUsuario' onChange={(event) => getTelefone(event)} autoComplete='off' required/>
                                <label>Digite seu telefone</label>
                            </div>
                            <div>
                                <input type='password' id="inpSenha" className='inpDadosUsuario' onChange={(event) => getSenha(event)} autoComplete='off' required/>
                                <label>Digite seu sua senha</label>
                            </div>
                            <button type='button' className='btnCadastrar' onClick={() => services.CadastraUsuario(nome, email, telefone, senha)}>Cadastrar</button>
                            <span>Abra as portas para um mundo de esportes apaixonante.<a href='/'>Toque para entrar no universo do SportSphere agora!</a></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastroRender;