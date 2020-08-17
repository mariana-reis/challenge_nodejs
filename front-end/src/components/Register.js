import React, { Component } from 'react';
import { register } from './UserFunctions';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            cpf: '',
            email: '',
            senha: '',
            nome: '',
            sobrenome:'',
            aniversario:'',
            telefone:'',
            cep:'',
            rua:'',
            numero: '',
            complemento:'',
            cidade: '',
            estado: ''

        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            cpf: this.state.cpf,
            email: this.state.email,
            senha: this.state.senha,
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            aniversario: this.state.aniversario,
            telefone: this.state.telefone,
            cep: this.state.cep,
            rua: this.state.rua,
            numero: this.state.numero,
            complemento: this.state.complemento,
            cidade: this.state.cidade,
            estado: this.state.estado
            
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Cadastro
                            </h1>

                            <div className="form-group">
                                <label htmlFor="cpf">CPF</label>
                                <input type="numeric" 
                                       className="form-control"
                                       name="cpf"
                                       placeholder="Entre com CPF"
                                       value={this.state.cpf}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" 
                                       className="form-control"
                                       name="email"
                                       placeholder="Entre com Email"
                                       value={this.state.email}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" 
                                       className="form-control"
                                       name="senha"
                                       placeholder="Entre com senha"
                                       value={this.state.senha}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" 
                                       className="form-control"
                                       name="nome"
                                       placeholder="Entre com nome"
                                       value={this.state.nome}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sobrenome"> Sobrenome</label>
                                <input type="text" 
                                       className="form-control"
                                       name="sobrenome"
                                       placeholder="Entre com sobrenome"
                                       value={this.state.sobrenome}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="aniversario">Aniversário</label>
                                <input type="date" 
                                       className="form-control"
                                       name="aniversario"
                                       placeholder="Entre com aniversario"
                                       value={this.state.aniversario}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="numeric" 
                                       className="form-control"
                                       name="telefone"
                                       placeholder="Entre com telefone"
                                       value={this.state.telefone}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cep"> CEP</label>
                                <input type="numeric" 
                                       className="form-control"
                                       name="cep"
                                       placeholder="Entre com CEP"
                                       value={this.state.cep}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="rua">Rua</label>
                                <input type="text" 
                                       className="form-control"
                                       name="rua"
                                       placeholder="Entre com rua"
                                       value={this.state.rua}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="numero">Numero</label>
                                <input type="numeric" 
                                       className="form-control"
                                       name="numero"
                                       placeholder="Entre com numero"
                                       value={this.state.numero}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="complemento">Complemento</label>
                                <input type="text" 
                                       className="form-control"
                                       name="complemento"
                                       placeholder="Entre com complemento"
                                       value={this.state.complemento}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cidade">Cidade</label>
                                <input type="text" 
                                       className="form-control"
                                       name="cidade"
                                       placeholder="Entre com cidade"
                                       value={this.state.cidade}
                                       onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="estado">Estado</label>
                                <input type="text" 
                                       className="form-control"
                                       name="estado"
                                       placeholder="Entre com estado"
                                       value={this.state.estado}
                                       onChange={this.onChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-lg btn btn-primary btn-block">
                                   Cadastrar
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

}

export default Register;