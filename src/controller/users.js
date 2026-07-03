const getAllUser = (req, res) => {
   const data = {
      id: '1',
      name: "Angga Dian",
      email: "anggadian@gmail.com",
      address: "Tlogoweru"
   }
   res.json({
      message: "GET all users success",
      data: data
   })
}

const createNewUser = (req, res) => {
   console.log(req.body)
   res.json({
      message: "CREATE new users success",
      data: req.body
   })
}


const updateUser = (req, res) => {
   const {idUser} = req.params
   console.log('idUser: ', idUser);
   res.json({
      message: "Update users success",
      data: req.body
   })
}

const deleteUser = (req, res) => {
   const {idUser} = req.params
   res.json({
      message: "DELETE users success",
      data: {
         id: idUser,
         name: "Angga Dian",
         email: "angga@gmail.com",
         address: "gatak"
      }
   })
}


module.exports = {
   getAllUser,
   createNewUser,
   updateUser,
   deleteUser
}