let proxId = 1;

const model = (body, idAluguel = proxId++) => {
    if(
        body.idLivro != undefined &&
        body.idEstudante != undefined &&
        body.idLivro!= "" &&
        body.idEstudante != ""
    ) {
        return {
            idAluguel,
            idLivro: body.idLivro,
            idEstudante: body.idEstudante,
            dataAluguel: body.dataAluguel,
            dataDevolucao: body.dataDevolucao
        }
    }
}

module.exports = model