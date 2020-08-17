import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            cpf: '',
            email: '',
            nome: '',
            sobrenome:'',
            aniversario:'',
            telefone:'',
            cep:'',
            rua:'',
            numero: '',
            complemento:'',
            cidade: '',
            estado: '',
            erros: {}
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            cpf: decoded.cpf,
            email: decoded.email,
            nome: decoded.nome,
            sobrenome: decoded.sobrenome,
            aniversario: decoded.aniversario,
            telefone: decoded.telefone,
            cep: decoded.cep,
            rua: decoded.rua,
            numero: decoded.numero,
            complemento: decoded.complemento,
            cidade: decoded.cidade,
            estado: decoded.estado

        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">
                            Perfil: {this.state.nome} {this.state.sobrenome} 
                        </h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>CPF:</td>
                                <td>{this.state.cpf}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Nome:</td>
                                <td>{this.state.nome}</td>
                            </tr>
                            <tr>
                                <td>Sobrenome:</td>
                                <td>{this.state.sobrenome}</td>
                            </tr>
                            <tr>
                                <td>Aniversário:</td>
                                <td>{this.state.aniversario}</td>
                            </tr>
                            <tr>
                                <td>Telefone</td>
                                <td>{this.state.telefone}</td>
                            </tr>
                            <tr>
                                <td>CEP:</td>
                                <td>{this.state.cep}</td>
                            </tr>
                            <tr>
                                <td>Rua:</td>
                                <td>{this.state.rua}</td>
                            </tr>
                            <tr>
                                <td>Número:</td>
                                <td>{this.state.numero}</td>
                            </tr>
                            <tr>
                                <td>Complemento:</td>
                                <td>{this.state.complemento}</td>
                            </tr>
                            <tr>
                                <td>Cidade:</td>
                                <td>{this.state.cidade}</td>
                            </tr>
                            <tr>
                                <td>Estado:</td>
                                <td>{this.state.estado}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile;