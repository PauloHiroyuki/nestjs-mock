import { Mock } from "../mock";

export const MOCK_REPOSITOTY_NAME = 'IUsuarioRepository';

export interface IMockRepository {
    incluir(registro: Mock): Promise<Mock>;
    alterar(registro: Mock);
    pesquisar(id: string): Promise<Mock>;
    pesquisarPorUrl(url: string): Promise<Mock>;
    pesquisarPorUrlDiferenteDoId(url: string, id: string): Promise<Mock>;
    remover(id: string);
    listar(): Promise<Mock[]>;
}