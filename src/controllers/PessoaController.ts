import { Request, Response } from "express";
import PessoaSchema from "../models/PessoaSchema";

class PessoaController {
    async cadastrar(request: Request, response: Response) {
        const novaPessoa = await PessoaSchema.create(request.body);
        response.status(201).json(novaPessoa);
    }

    async listar(request: Request, response: Response) {
        response.status(200).json(await PessoaSchema.find());
    }
}
export { PessoaController };