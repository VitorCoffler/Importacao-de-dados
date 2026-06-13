import { Endereco } from "./Endereco";
export class PessoaJuridica {
    private cnpj: string;
    private razaoSocial: string;
    private email: string;
    private telefone: string;
    private endereco: Endereco;

    constructor(cnpj: string, razaoSocial: string, email: string, telefone: string, endereco: Endereco) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    public get Cnpj(): string {
        return this.cnpj;
    }

    public get RazaoSocial(): string {
        return this.razaoSocial;
    }

    public get Email(): string {
        return this.email;
    }

    public get Telefone(): string {
        return this.telefone;
    }

    public get Endereco(): Endereco {
        return this.endereco;
    }

    public set RazaoSocial(razaoSocial: string) {
        this.razaoSocial = razaoSocial;
    }

    public set Email(email: string) {
        this.email = email;
    }

    public set Telefone(telefone: string) {
        this.telefone = telefone;
    }

    public set Endereco(endereco: Endereco) {
        this.endereco = endereco;
    }

    public toString(): string {
        return("CNPJ: " + this.cnpj + "\n" +
               "Razão Social: " + this.razaoSocial + "\n" +
               "Email: " + this.email + "\n" +
               "Telefone: " + this.telefone + "\n" +
               "Endereço: \n" + this.endereco.toString());
    }
}