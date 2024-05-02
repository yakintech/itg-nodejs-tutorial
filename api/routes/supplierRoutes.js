const express = require("express")
const router = express.Router()

let suppliers = [
    {
        id: 1,
        name: "Apple"
    },
    {
        id: 2,
        name: "Microsoft"
    }
]


router.get('/', (req, res) => {
    return res.json(suppliers)
})

router.get("/:id", (req, res) => {
    let supplier = suppliers.find(q => q.id == req.params.id)

    if (supplier)
        return res.json(supplier)
    else
        return res.status(404).send("Not found!")
})

router.post('/', (req, res) => {
    let id = suppliers.length + 1

    suppliers.push({
        id: id,
        name: req.body.name
    })

    return res.json("OK")
})

router.delete('/:id', (req, res) => {
    suppliers = suppliers.filter(q => q.id != req.params.id)
    return res.send("OK!")
})

module.exports = router

