const express = require("express");
const estudantes_controller = require("../controllers/estudantes_controller.js")
const routerEstudantes = express.routerEstudantes();

routerEstudantes.get("/", (req, res) => {
    res.json(estudantes_controller.index())
})

routerEstudantes.get("/:id", (req, res) => {
    res.json(estudantes_controller.show(req.params.id))
})

routerEstudantes.post("/", (req, res) => {
    const code = estudantes_controller.store(req.body)
    res.status(code).json()
})

routerEstudantes.put("/:id", (req, res) => {
    const code = estudantes_controller.update(req.body, req.params.id)
    res.status(code).json()
})

routerEstudantes.delete("/:id", (req, res) => {
    estudantes_controller.destroy(req.params.id)
    res.json()
})

module.exports = routerEstudantes