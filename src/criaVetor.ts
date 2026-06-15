import { RepositorioPessoaJuridica } from "./RepositorioPessoaJuridica";
import { PessoaJuridica } from "./PessoaJuridica";
import { fetchCNPJ } from "./receitaWs";

function delay(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

const repositorio = new RepositorioPessoaJuridica();

export async function criarVetorPessoaJuridica(_vetor: Array<string>): Promise<Array<PessoaJuridica>> {
    console.log("Iniciando a requisição\n");

    for (let i = 0; i < _vetor.length; i++) {
        const cnpj = _vetor[i];

        try {
            
            if (i > 0 && i % 2 == 0) {
                await delay(23000); // Primeiro delay (condicional)
            }

            const resultadoEmpresa: PessoaJuridica = await fetchCNPJ(cnpj!);

            repositorio.adicionar(resultadoEmpresa);

            console.log("\n" + (i + 1) + " - Consulta ");
            console.log(resultadoEmpresa);

        }
        catch (error: any) {
            console.log(error.message);
        }

        await delay(23000);

    }

    console.log("listagem de pessoa jurídica");

    return repositorio.listar();
}