const stokProduk = require('../models/stokProduk')

const getAllStokProduk = async (req, res) => {
   try {
      const [data] = await stokProduk.getAllStokProduk()

      res.json({
         message: 'GET All Stok Produk',
         data: data
      })
   } catch (error) {
      res.status(500).json({
         message: "Server Error",
         serverMessage: error
      })
   }
}

const UpdateStokProduk = async (req, res) => {
   const {idStok} = req.params
   const {body} = req
   try {
      await stokProduk.UpdateStokProduk(body, idStok)
      res.json({
         message: "Update Stok Produk",
         data: {
            id: idStok,
            ...body
         }
      })      
   } catch (error) {
      res.status(500).json({
         message: "Server Error",
         serverMessage: error
      })
   }
}

module.exports = {
   getAllStokProduk,
   UpdateStokProduk
}