const express = require('express')
const app = express()

const products = require('./products.json')

app.get('/products', (req,res)=>{
    res.json(products)
})

const PORT = 4000
app.listen(PORT, ()=>console.log('server is listening on port ', PORT))