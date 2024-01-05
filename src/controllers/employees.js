import mongoose from "mongoose";

export const showTeste = (req, res) => {
    return res.status(200).json('Arquivo de testes');
}

export const register = (req, res) => {
    const { name, age, role } = req.body;

    console.log(name, age, role);

    return res.status(201).json('Funcionário resgistrado com sucesso.');
}

mongoose.connect(`mongodb+srv://Joseph:${process.env.DB_PASSWORD}@cluster90.hxnbpxw.mongodb.net/`)
    .then(() => { console.log('Mongoose conectado.'); })
    .catch(() => { console.log('Não conectado'); })