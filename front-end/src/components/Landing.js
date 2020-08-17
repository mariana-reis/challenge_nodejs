import React, { Component } from 'react';

import Logo from '../logo_provi.png';


class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/>
                <center><h1 class="display-4">Solicitar um empréstimo</h1></center>
 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 
                <img src={Logo} class="img-fluid" alt="Responsive image"/> 

                <p class="lead">
                Nosso objetivo é promover uma educação especializada para que os brasileiros se qualifiquem e realizem seus sonhos. Financiamos cursos e especializações para designers, desenvolvedores, cientistas de dados, profissionais de marketing digital, etc.
                </p>        
                </div>

            </div>
            
        )
    }
}

export default Landing;