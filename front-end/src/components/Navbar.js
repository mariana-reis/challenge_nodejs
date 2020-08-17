import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


class Landing extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Cadastro
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Usuário
                    </Link>
                </li>

                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Sair
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar1"
                        aria-controls="navbar1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand font-weight-bold" href="#">Provi</a>
                <div className="collapse navbar-collapse justify-content-md-center"
                id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                    </div>
                </div>
            </nav>

        )
    }
}

export default withRouter(Landing)
