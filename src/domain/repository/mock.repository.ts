import { Mock } from "../mock";

export const MOCK_REPOSITOTY_NAME = 'IUsuarioRepository';

export interface IMockRepository {
    incluir(registro: Mock): Promise<Mock>;
    alterar(registro: Mock);
    pesquisar(id: string): Promise<Mock>;
    pesquisarPorEndereco(endereco: string): Promise<Mock>;
    pesquisarPorEnderecoDiferenteDoId(endereco: string, id: string): Promise<Mock>;
    remover(id: string);
    listar(): Promise<Mock[]>;
}