const dbPool = require('../config/database')

const getAllStokProduk = () => {
   const SQLQuery = `SELECT A.id, A.stok, B.id, B.nama_produk, B.ctgr_produk 
                     FROM stok_produk AS A 
                     INNER JOIN produk AS B ON A.produk_id = B.id `;

   return dbPool.execute(SQLQuery);
}

const UpdateStokProduk = (body, idStok) => {
   const SQLQuery = `UPDATE stok_produk SET stok='${body.stok}' WHERE id='${idStok}'`;

   return dbPool.execute(SQLQuery)
}

module.exports = {
   getAllStokProduk,
   UpdateStokProduk,
}