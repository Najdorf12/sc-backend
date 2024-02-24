import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://agustinmorro:BocaJrs12@suela-caramelo.ykobny7.mongodb.net/?retryWrites=true&w=majority&appName=suela-caramelo"
    );
    console.log("conexion a mongo exitosa")
  } catch (error) {
    console.log(error);
  }
};
