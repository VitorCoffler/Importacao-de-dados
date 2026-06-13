export class Endereco {
    private cep: string;
    private logradouro: string;
    private bairro: string;
    private estado: string;
    private ddd: string;

    constructor(cep: string, logradouro: string, bairro: string, estado: string, ddd: string) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.estado = estado;
        this.ddd = ddd;
    }

    public get Cep(): string {
        return this.cep;
    }

    public get Logradouro(): string {
        return this.logradouro;
    }

    public get Bairro(): string {
        return this.bairro;
    }

    public get Estado(): string {
        return this.estado;
    }

    public get Ddd(): string {
        return this.ddd;
    }

    public set Cep(cep: string) {
        this.cep = cep;
    }

    public set Logradouro(logradouro: string) {
        this.logradouro = logradouro;
    }

    public set Bairro(bairro: string) {
        this.bairro = bairro;
    }

    public set Estado(estado: string) {
        this.estado = estado;
    }

    public set Ddd(ddd: string) {
        this.ddd = ddd;
    }

    public toString(): string {
        return("CEP: " + this.cep + "\n" +
               "Logradouro: " + this.logradouro + "\n" +
               "Bairro: " + this.bairro + "\n" +
               "Estado: " + this.estado + "\n" +
               "DDD: " + this.ddd);
    }
}