import mongoose from "mongoose";
import employee from "../models/employee.js";

export const showData = async (req, res) => {

    const workerList = await employee.find();

    // const workerList = await employee.find().select('name age role');

    return res.status(200).json(workerList);
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