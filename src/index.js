require('dotenv').config();
const port = process.env.PORT || 5000;
const express = require('express');

const userRoutes = require('./routes/users')

const middlewareLogRequest = require('./middleware/logs')

const app = express();

// pattern dalam routing expres adalah app.method(path, handler);
// app.use("/", (req, res, next) => {
//    res.send('<h1> hello world</h1>')
// })

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
   console.log(`Server Success port ${port}`)
})