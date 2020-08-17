const express = require("express");
const users = express.Router();
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const User = require("../models/User");
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        cpf: req.body.cpf,
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        aniversario: req.body.aniversario,
        telefone: req.body.telefone,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        complemento: req.body.complemento,
        cidade: req.body.cidade,
        estado: req.body.estado,
        created: today
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.senha, 10, (err, hash) => {
                userData.senha = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.email + ' registered'})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        }else{
            res.json({error: "Usuário já existe"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })

});

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.senha, user.senha)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                   expiresIn: 1440 
                })
                res.send(token)
            }
        }else{
           res.status(400).json({ error: 'Usuário não existe' })
        }
    })
    .catch(err => {
        res.status(400).json({ error: err })
    })
})

module.exports = users;