const express = require('express')
const port = process.env.PORT || 5000
const app = express()

const path = require('path')
const clientPath=path.join(__dirname,'client')

app.use(express.static(clientPath));

app.listen(port,()=>{console.log(`Server has been started on port ${port}`)
})