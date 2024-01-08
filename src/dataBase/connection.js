import mongoose from "mongoose";

const connectDataBase = async () => {
    await mongoose.connect(`mongodb+srv://Joseph:${process.env.DB_PASSWORD}@cluster90.hxnbpxw.mongodb.net/`)
}

export default connectDataBase;
