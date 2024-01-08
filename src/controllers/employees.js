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

export const deleteData = async (req, res) => {
    const { id } = req.params;

    await employee.findByIdAndDelete({ _id: id });

    return res.status(200).json('Funcionário deletado com sucesso.');
}