let proxId = 1;

const model = (body, idLivro = proxId++) => {
    if(
        body.titulo != undefined &&
        body.autor!= undefined &&
        body.titulo != "" &&
        body.autor!= ""
    ) {
        return {
            idLivro,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        }
    }
}

module.exports = model