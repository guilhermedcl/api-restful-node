// importando módulo o express e configurando o servidor
const express = require('express')
const app = express()
const port = 3000

//convertendo os dados que chegam no POST para JSON.
app.use(express.json());

// criando um objeto para armazenar os materiais
let data = {
	'materials' : []
}

// rota para listar todos os materiais
app.get('/materials', (req, res) => {
	res.json(data)
})

// rota para adicionar um novo material
app.post('/materials', (req, res) => {
	let newMaterial = req.body
	newMaterial.id = data.materials.length

	data.materials.push(newMaterial)
	res.status(201).json({"new_customer_id": newMaterial.id})
})

// rota para buscar um material pelo id
app.get('/materials/:id', (req, res) => {
    let idMaterial = req.params.id
    
	let material = data.materials[idMaterial]

	res.json(material)

})

// rota para atualizar um material pelo id
app.put('/materials/:id', (req, res) => {
    let idMaterial = req.params.id
	let newData = req.body

	data.materials[idMaterial].name = newData.name
	data.materials[idMaterial].qtde = newData.qtde 

	res.send("Material atualizado com sucesso!")
})

// rota para remover um material pelo id
app.delete('/materials/:id', (req, res) => {
    let idMaterial = req.params.id
    
	data.materials.splice(idMaterial, 1)

	res.send('Material removido com sucesso!')
})

// inicia o servidor na porta definida e exibe uma mensagem no consol
app.listen(port, () => {
    console.log('Servidor rodando na porta: ' + port)
})