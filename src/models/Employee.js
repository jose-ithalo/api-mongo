import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('employee', employeeSchema);