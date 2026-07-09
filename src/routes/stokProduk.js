const express = require('express')

const StokProdukControler = require('../controller/stokProduk')

const router = express.Router()

// get Stok Produk 
router.get('/', StokProdukControler.getAllStokProduk);

// Update Stok Produk
router.patch('/:idStok', StokProdukControler.UpdateStokProduk);

module.exports = router