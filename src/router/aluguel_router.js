const express = require("express");
const usuario_controller = require("../controllers/.js")
const routerAluguel = express.routerAluguel();

routerAluguel.get("/", (req, res) => {
    res.json(usuario_controller.index())
})

routerAluguel.get("/:id", (req, res) => {
    res.json(usuario_controller.show(req.params.id))
})

routerAluguel.post("/", (req, res) => {
    const code = usuario_controller.store(req.body)
    res.status(code).json()
})

routerAluguel.put("/:id", (req, res) => {
    const code = usuario_controller.update(req.body, req.params.id)
    res.status(code).json()
})

routerAluguel.delete("/:id", (req, res) => {
    usuario_controller.destroy(req.params.id)
    res.json()
})

module.exports = routerAluguel