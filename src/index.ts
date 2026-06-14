// Função para consultar empresa pela ReceitaWS
async function consultarEmpresa(cnpj: string): Promise<any> {

    const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;

    const response: Response = await fetch(url);

    if (response.ok) {
        return response.json();
    } else {
        throw new SyntaxError(`HTTP error! Status: ${response.status}`);
    }
}

// Função para consultar CEP no ViaCEP
async function consultarCEP(cep: string): Promise<any> {

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const response: Response = await fetch(url);

    if (response.ok) {
        return response.json();
    } else {
        throw new SyntaxError(`HTTP error! Status: ${response.status}`);
    }
}

// Função principal usando async/await
async function displayEmpresas(): Promise<void> {

    const listaCNPJ: string[] = [
        "47960950000121", // Revista Luiza - SP
        "04817052000106", // Yamaha Motor da Amazônia - AM
        "330001670001016", // Petrobras - RJ
        "00419613000128", // Banco do Brasil - DF
        "84429695000111", // WEG - SC
        "92702067000196", // Banrisul - RS
        "89850341000160"  // Grendene - CE
    ];

    try {

        for (const cnpj of listaCNPJ) {

            console.log("\n=========================");
            console.log(`Consultando CNPJ: ${cnpj}`);

            // ReceitaWS
            const empresa = await consultarEmpresa(cnpj);

            if (empresa.status === "ERROR") {
                console.log("Empresa não encontrada!");
                continue;
            }

            console.log(`Empresa: ${empresa.nome}`);
            console.log(`CNPJ: ${empresa.cnpj}`);
            console.log(`CEP: ${empresa.cep}`);

            // Remove caracteres do CEP
            const cepLimpo = empresa.cep.replace(/\D/g, "");

            // ViaCEP
            const endereco = await consultarCEP(cepLimpo);

            if ("erro" in endereco) {
                console.log("CEP não encontrado!");
            } else {
                console.log(`Logradouro: ${endereco.logradouro}`);
                console.log(`Cidade: ${endereco.localidade}`);
                console.log(`Estado: ${endereco.uf}`);
            }
        }

    } catch (error: any) {

        console.log("Erro durante consulta:");
        console.log(`${error.name}: ${error.message}`);

    }
}

displayEmpresas();