const { Router} = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send("Ola Mundo")

})

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