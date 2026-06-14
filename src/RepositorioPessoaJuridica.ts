import { PessoaJuridica } from "./PessoaJuridica";

export class RepositorioPessoaJuridica {

    listaPessoaJuridica: Array<PessoaJuridica>;

    constructor() {
        this.listaPessoaJuridica = new Array<PessoaJuridica>();
    }

    public adicionar(empresa: PessoaJuridica): boolean {
        this.listaPessoaJuridica.push(empresa);
        return true;
    }

    listar(): Array<PessoaJuridica> {
        return this.listaPessoaJuridica;
    }
}