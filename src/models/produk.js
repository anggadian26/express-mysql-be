const dbPool = require('../config/database')

const getAllProduk = () => {
   const SQLQuery = "SELECT * FROM produk ";

   return dbPool.execute(SQLQuery);
}

const CreateNewProduk = (body) => {
   const SQLQuery = `INSERT INTO produk (nama_produk, ctgr_produk) 
                     VALUES ('${body.nama_produk}', '${body.ctgr_produk}')`

   return dbPool.execute(SQLQuery)
}

const UpdateProduk = (body, idProduk) => {
   const SQLQuery = `UPDATE produk SET nama_produk='${body.nama_produk}', ctgr_produk='${body.ctgr_produk}'
                     WHERE id = ${idProduk}`

   return dbPool.execute(SQLQuery)
}

module.exports = {
   getAllProduk,
   CreateNewProduk,
   UpdateProduk
}