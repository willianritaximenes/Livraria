const express = require("express");
const livros_controller = require("../controllers/livros_controllers.js")
const routerLivros = express.Router();

routerLivros.get("/", (req, res) => {
    res.json(livros_controller.index())
})

routerLivros.get("/:id", (req, res) => {
    res.json(livros_controller.show(req.params.id))
})

routerLivros.post("/", (req, res) => {
    const code = livros_controller.store(req.body)
    res.status(code).json()
})

routerLivros.put("/:id", (req, res) => {
    const code = livros_controller.update(req.body, req.params.id)
    res.status(code).json()
})

routerLivros.delete("/:id", (req, res) => {
    livros_controller.destroy(req.params.id)
    res.json()
})

module.exports = routerLivros