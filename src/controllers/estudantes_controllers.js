const model = require("../modules/estudantes_modules.js")

const db = []

const index = () => db

const show = idEstudante => db.find(el => el.idEstudante == idEstudante)

const store = (body) => {
    const novo = model(body)

    if (novo) {
        db.push(novo)
        return 201
    }

    return 400
}

const update = (body, idEstudante) => {
    const novo = model(body, parseInt(idEstudante))
    const indice = db.findIndex(el => el.idEstudante == idEstudante)

    if (novo && indice != -1) {
        db[indice] = novo
        return 200
    }

    return 400
}

const destroy = idEstudante => {
    const indice = db.findIndex(el => el.idEstudante == idEstudante)
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