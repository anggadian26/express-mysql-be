const express = require('express')

const ProdukController = require('../controller/produk')

const router = express.Router()

// Get Produk
router.get('/', ProdukController.getAllProduk)

// Post Produk
router.post('/', ProdukController.CreateNewProduk)

// update patch
router.patch('/:idProduk', ProdukController.UpdateProduk)



module.exports = router;