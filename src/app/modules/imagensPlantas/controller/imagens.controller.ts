import { Request, Response } from "express";
import { ImagensUseCase } from "../useCases/imagensUseCases";

export class ImagensController {

    async create(req: Request, res: Response) {

        const { data } = req.body;

        if (!data) {
            throw new Error("Parâmetros inválidos.")
        }

        const imagemUseCases = new ImagensUseCase();

        const resultado = await imagemUseCases.create(data);

        return res.status(201).json(resultado);
    }

    async update(req: Request, res: Response) {

        const { id } = req.params;
        const { imagem } = req.body;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const imagensUseCases = new ImagensUseCase()

        const atualizacao = await imagensUseCases.update({ id, imagem })

        return res.status(200).json(atualizacao)
    }

    async delete(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const imagensUseCases = new ImagensUseCase()

        const exclusao = await imagensUseCases.delete({ id })

        return res.status(200).json(exclusao)
    }

    async buscaImagem(req: Request, res: Response) {

        const { id } = req.params;

        if (!id) {
            throw new Error("Parâmetros inválidos.")
        }

        const imagensUseCases = new ImagensUseCase();

        const imagem = await imagensUseCases.buscaImagemPorId(id);

        return res.status(200).json(imagem);
    }

    async buscaImagemPorPlantaId(req: Request, res: Response) {

        const { plantaId } = req.params;

        if (!plantaId) {
            throw new Error("Parâmetros inválidos.")
        }

        const imagensUseCases = new ImagensUseCase();

        const usuario = await imagensUseCases.buscaImagemPorPlantaId(plantaId);

        return res.status(200).json(usuario);
    }

    async buscaTodasAsImagens(req: Request, res: Response) {

        const imagensUseCases = new ImagensUseCase()

        const usuarios = await imagensUseCases.buscaTodasAsImagens()

        return res.status(200).json(usuarios)
    }
}