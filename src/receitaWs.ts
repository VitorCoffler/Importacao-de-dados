import { PessoaJuridica } from "./PessoaJuridica";
import { Endereco } from "./Endereco";
import { verificaCnpj } from "./validacoes";
import { fetchCEP } from "./fethCEP";

export async function fetchCNPJ(_cnpj: string): Promise<PessoaJuridica> {
    try {
        const cnpj = verificaCnpj(_cnpj);
        const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
        
        if (response.status == 429) {
            throw new Error("Limite de requisições excedido na ReceitaWS (máx 3 por minuto).");
        }

        if (response.ok) {
            const responseJSON = await response.json();
            const endereco: Endereco = await fetchCEP(responseJSON.cep.replace(/\D/g, ""));
            const obj: PessoaJuridica = new PessoaJuridica(responseJSON.cnpj,
                responseJSON.fantasia || responseJSON.nome,
                responseJSON.email,
                responseJSON.telefone,
                endereco);
                return obj;
        }
        else {
            throw new Error("CPNJ não encontrado!");
        }
    }
    catch (error: any) {
        throw new Error("Erro ao criar: " + error.message);
    }
}