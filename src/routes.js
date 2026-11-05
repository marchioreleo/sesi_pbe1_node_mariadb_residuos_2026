const express = require("express")
const router = express.Router()

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

const Usuario = require('../src/controllers/usuario')
const Ocorrencia = require('../src/controllers/ocorrencia')

router.post('/usuario/cadastrar', Usuario.cadastrar)
router.post('/ocorrencia/cadastrar', Ocorrencia.cadastrar)

router.get('/usuario/listar', Usuario.listar)
router.get('/ocorrencia/listar', Ocorrencia.listar)


module.exports = router