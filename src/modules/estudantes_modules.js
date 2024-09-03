let proxId = 1;

const model = (body, idEstudante = proxId++) => {
    if(
        body.nome != undefined &&
        body.matricula!= undefined &&
        body.nome != "" &&
        body.matricula != ""
    ) {
        return {
            idEstudante,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}

module.exports = model