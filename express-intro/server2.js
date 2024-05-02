const express = require('express')

const app = express();


app.use(express.json()) // normal body parser
app.use(express.urlencoded()) // form-urlencoded body parser

//express file upload
const fileUpload = require('express-fileupload')
app.use(fileUpload())

let categories = [
    {
        id: 1,
        name: "Electronic"
    },
    {
        id: 2,
        name: "Camp"
    }
]


app.get("/api/categories", (req, res) => {
    return res.json(categories)
})

app.get("/api/categories/:id", (req,res) => {
    let id = req.params.id
    let category = categories.find(q => q.id == id);

    if(category)
        return res.json(category)
    else
    return res.status(404).send(`${id} not found!`)
  
    
})

app.post("/api/categories", (req,res) => {
     let id = categories.length + 1 // öylesine id olusturuyorum
     categories.push({
        id,
        name:req.body.name
     })
     return res.send("OK")
})


//get file upload form
app.post("/api/upload", (req,res) =>{
    //save my folder
    let file = req.files.cName
    file.mv(__dirname + "/" + file.name)

    res.send("OK")
})



app.listen(3000, () => {
    console.log("Server is running..");
})