const { Router} = require("express")
const {getLivros, getLivro} = require("../controladores/livro")
const router = Router()

router.get('/', getLivros)


router.get('/:id', getLivro)

router.post('/', (req,res) => {
    res.send("Foi adicionado")
})
router.patch('/', (req,res) => {
    res.send("Foi atualizado")
})
router.delete('/', (req,res) => {
    res.send("Foi excluido")
})


module.exports = router;