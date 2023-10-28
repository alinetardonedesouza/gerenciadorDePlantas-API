import { Request, Response } from "express";
import { PlantasUseCase } from "../useCases/plantasUseCases";

export class PlantasController {

    async create(req: Request, res: Response) {

        const { data } = req.body;

        if (!data) {
            throw new Error("Parâmetros inválidos.")
        }

        const plantaUseCases = new PlantasUseCase();

        const resultado = await plantaUseCases.create(data);

        return res.status(201).json(resultado);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { data } = req.body;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const plantasUseCases = new PlantasUseCase()

        const atualizacao = await plantasUseCases.update({ id, data })

        return res.status(200).json(atualizacao)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const plantasUseCases = new PlantasUseCase()

        const exclusao = await plantasUseCases.delete({ id })

        return res.status(200).json(exclusao)
    }

    async buscaPlanta(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const plantasUseCases = new PlantasUseCase();

        const usuario = await plantasUseCases.buscaPlantaPorId(id);

        return res.status(200).json(usuario);
    }

    async buscaPlantaPorUsuarioId(req: Request, res: Response) {

        const { usuarioId } = req.params;

        if (!usuarioId) {
            throw new Error("Parâmetros inválidos.")
        }

        const plantasUseCases = new PlantasUseCase();

        const usuario = await plantasUseCases.buscaPlantaPorUsuarioId(usuarioId);

        return res.status(200).json(usuario);
    }

    async buscaPlantaPorNome(req: Request, res: Response) {

        const { nome } = req.params;

        if (!nome) {
            throw new Error("Parâmetros inválidos.")
        }

        const plantasUseCases = new PlantasUseCase();

        const usuario = await plantasUseCases.buscaPlantaPorNome(nome);

        return res.status(200).json(usuario);
    }

    async buscaTodasAsPlantas(req: Request, res: Response) {

        const plantasUseCases = new PlantasUseCase()

        const usuarios = await plantasUseCases.buscaTodasAsPlantas()

        return res.status(200).json(usuarios)
    }
}