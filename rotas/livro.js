const { Router} = require("express")
const {getLivros, getLivro, postLivro} = require("../controladores/livro")
const router = Router()

router.get('/', getLivros)


router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/', (req,res) => {
    res.send("Foi atualizado")
})
router.delete('/', (req,res) => {
    res.send("Foi excluido")
})


module.exports = router;