const ProdukModel = require('../models/produk');

const getAllProduk = async (req, res) => {
   try {
      const [data] = await ProdukModel.getAllProduk()

      res.json({
         message: "GET All Produk",
         data: data
      })
   } catch (error) {
      res.status(500).json({
         message: 'Server error',
         serverMessage: error
      })
   }
}

const CreateNewProduk = async (req, res) => {
   const {body} = req

   try {
      await ProdukModel.CreateNewProduk(body)
      res.status(201).json({
         message: "CREATE New Produk",
         data: body
      })
   } catch (error) {
      res.status(500).json({
         message: 'Server Error',
         serverMessage: error
      })
   }
}

const UpdateProduk = async (req, res) => {
   const {idProduk} = req.params
   const {body} = req

   try {
      await ProdukModel.UpdateProduk(body, idProduk)
      res.json({
         message: 'UPDATE produk',
         data: {
            id: idProduk,
            ...body
         }
      })
   } catch (error) {
      res.status(500).json({
         message: 'Server Error',
         serverMessage: error
      })
   }
}

module.exports= {
   getAllProduk,
   CreateNewProduk,
   UpdateProduk,
}