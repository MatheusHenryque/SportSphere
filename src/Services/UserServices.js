import axios from 'axios';

class UserServices{
    CadastraUsuario(nome, email, telefone, senha){
            console.log(nome, email, telefone, senha)
    }

    ValidaUsuario(usuario, senha){
        console.log(usuario)
        console.log(senha)
    }
}

export default UserServices;