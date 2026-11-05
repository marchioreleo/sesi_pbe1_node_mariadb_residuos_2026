const con = require('../db')

const cadastrar = (req, res) => {
    const {usuarioId, local, tipoResiduo, nivelRisco, data, status} = req.body
    try {
        const query = 'INSERT INTO ocorrencia (usuarioId, local, tipoResiduo, nivelRisco, data, status) VALUES (?, ?, ?, ?, ?, ?);'
        con.query(query, [usuarioId, local, tipoResiduo, nivelRisco, data, status], (err, results) => {
            if(err) {
                console.error(err)
                res.status(500).json({ error: 'Erro ao cadastrar ocorrência'})
            } else {
                const novaOcorrencia = req.body
                novaOcorrencia.id = results.insertId
                res.status(201).json({ message: 'Ocorrência cadastrada com sucesso', user: novaOcorrencia})
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: 'Erro ao cadastrar a ocorrência', details: 'Informe{ usuarioId, local, tipoResiduo, nivelRisco, data, status}'})
    }
}

const listar = (req, res) => {
    const query = 'select * from ocorrencia;'
    con.query(query, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar ocorrências'})
        } else {
            res.json(results)
        }
    })
}

module.exports = {
    cadastrar,
    listar
}