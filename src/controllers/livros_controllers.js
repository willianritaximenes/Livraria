const model = require("../modules/livros_modules.js")

const db = []

const index = () => db

const show = idLivro => db.find(el => el.idLivro == idLivro)

const store = (body) => {
    const novo = model(body)

    if (novo) {
        db.push(novo)
        return 201
    }

    return 400
}

const update = (body, idLivro) => {
    const novo = model(body, parseInt(idLivro))
    const indice = db.findIndex(el => el.idLivro == idLivro)

    if (novo && indice != -1) {
        db[indice] = novo
        return 200
    }

    return 400
}

const destroy = idLivro => {
    const indice = db.findIndex(el => el.idLivro == idLivro)
    if (indice != -1) {
        db.splice(indice, 1)
    }
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}