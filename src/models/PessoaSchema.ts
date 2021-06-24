import { model, Schema } from "mongoose";

const pessoaSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "NOME Obrigatório"],
        },
        cpf: {
            type: String,
            required: [true, "CPF é Obrigatória"],
        },
        anonasce: {
            type: Number,
            required: [true, "Data de Nascimento é obrigatorio"],
        },
    },
    {
        timestamps: true,
    }
);

export default model("pessoas", pessoaSchema);
