import { ExcecaoDeNegocio } from "../erro/excecao-negocio";

export class ValidationDomain {

    static notNull(object: any, message: string) {
        if (object !== null && object !== undefined) return object;
        throw new ExcecaoDeNegocio(message);
    }
}