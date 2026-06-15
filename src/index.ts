import { criarVetorPessoaJuridica } from "./criaVetor";
import { fetchCEP } from "./fethCEP";

const listaCNPJ: string[] = [
        "47960950000121", // MAGAZINE LUIZA - SP
        "04817052000106", // Yamaha Motor da Amazônia - AM
        "330001670001016", // Petrobras - RJ
        "00419613000128", // Banco do Brasil - DF
        "84429695000111", // WEG - SC
        "92702067000196", // Banrisul - RS
        "89850341000160"  // Grendene - CE
];

async function mostrarResultado() {
    const vetPessoaJuridica = await criarVetorPessoaJuridica(listaCNPJ);
    console.log("\n - - - - - - Método toString() - - - - - -\n")
    vetPessoaJuridica.forEach(objeto => {
        console.log(objeto.toString());
    });
}

mostrarResultado();