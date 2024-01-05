import mongoose from "mongoose";
import employee from "../models/employee.js";

export const showTeste = (req, res) => {
    return res.status(200).json('Arquivo de testes');
}

export const register = async (req, res) => {
    // const { name, age, role } = req.body;

    // const newEmployee = await employee.create({
    //     name,
    //     age,
    //     role
    // });

    const data = req.body;
    const newEmployee = await employee.create(data);

    return res.status(201).json(newEmployee);
}

mongoose.connect(`mongodb+srv://Joseph:${process.env.DB_PASSWORD}@cluster90.hxnbpxw.mongodb.net/`)
    .then(() => { console.log('Mongoose conectado.'); })
    .catch(() => { console.log('Não conectado'); })