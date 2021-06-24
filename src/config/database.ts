import mongoose from "mongoose";

mongoose
    .connect(
        "mongodb+srv://rafaoli:reaper123@cluster0.nsam9.mongodb.net/cadastrodepessoas",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Banco de dados Online");
    })
    .catch((erro) => {
        console.log(`Não foi possivel conectar: ${erro}`);
    });

export { mongoose };
