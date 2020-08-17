import axios from 'axios';

export const register = newUser => {
    return axios 
    .post('users/register', {
        cpf: newUser.cpf,
        email: newUser.email,
        senha: newUser.senha,
        nome: newUser.nome,
        sobrenome: newUser.sobrenome,
        aniversario: newUser.aniversario,
        telefone: newUser.telefone,
        rua: newUser.rua,
        numero: newUser.numero,
        complemento: newUser.complemento,
        cidade: newUser.cidade,
        estado: newUser.estado
    })
    .then(res => {
        console.log("Registered")
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        senha: user.senha
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}