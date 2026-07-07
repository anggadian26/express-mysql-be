require('dotenv').config();
const port = process.env.PORT || 5000;
const express = require('express');

const userRoutes = require('./routes/users')
const produkRoutes = require('./routes/produk')

const middlewareLogRequest = require('./middleware/logs')
const upload = require('./middleware/multer')

const app = express();

// pattern dalam routing expres adalah app.method(path, handler);
// app.use("/", (req, res, next) => {
//    res.send('<h1> hello world</h1>')
// })

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'))

app.use('/users', userRoutes);
app.use('/produk', produkRoutes)

app.use('/upload', upload.single('photo'), (req, res) => {
   res.json({
      message: 'Upload Berhasil'
   })
})

app.use((err, req, res, next) => {
   res.json({
      message: err.message
   })
})

app.listen(port, () => {
   console.log(`Server Success port ${port}`)
})