const model = require("../modules/aluguel_modules.js")

const db = []

const index = () => db

const show = idAluguel => db.find(el => el.idAluguel == idAluguel)

const store = (body) => {
    const novo = model(body)

    if (novo) {
        db.push(novo)
        return 201
    }

    return 400
}

const update = (body, idAluguel) => {
    const novo = model(body, parseInt(idAluguel))
    const indice = db.findIndex(el => el.idAluguel == idAluguel)

    if (novo && indice != -1) {
        db[indice] = novo
        return 200
    }

    return 400
}

const destroy = idAluguel => {
    const indice = db.findIndex(el => el.idAluguel == idAluguel)
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