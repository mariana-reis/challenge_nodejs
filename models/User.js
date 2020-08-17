const Sequelize = require("sequelize");
const db = require("../database/db");
const { sequelize } = require("../database/db");

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpf: {
            type: Sequelize.STRING,
            typeUnique: Sequelize.UNIQUE
        },
        email: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        nome: {
            type: Sequelize.STRING
        },
        sobrenome: {
            type: Sequelize.STRING
        },
        aniversario: {
            type: Sequelize.STRING
        },
        telefone: {
            type: Sequelize.NUMERIC
        },
        cep: {
            type: Sequelize.NUMERIC
        },
        rua: {
            type: Sequelize.STRING
        },
        numero: {
            type: Sequelize.NUMERIC
        },
        complemento: {
            type: Sequelize.STRING
        },
        cidade: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
       timestamps: false
    }
);