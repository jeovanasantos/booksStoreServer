const { Router} = require("express")
const {getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require("../controladores/livro")
const { deleteFavorito, postFavorito, getFavoritos } = require("../controladores/favoritos")
const router = Router()

router.get('/', getLivros)


router.get('/:id', getLivro)

router.get('/favoritos', getFavoritos)

router.delete('/favoritos/:id', deleteFavorito)

router.post('/favoritos/', postFavorito)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)


module.exports = router;