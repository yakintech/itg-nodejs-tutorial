const express = require('express')
const app = express();
const PORT = 3000 || process.env.PORT
const supplierRoutes = require("./routes/supplierRoutes")
const jwt = require("jsonwebtoken")
app.use(express.json()) // normal body parser

const tokenKey = "mySecretKey"


//token middleware with Bearer token
const tokenMiddleware = (req, res, next) => {

    //login url check
    if (req.url == "/api/login") {
        return next()
    }

    try {
        const bearerHeader = req.headers["authorization"]
        if (bearerHeader) {
            const bearer = bearerHeader.split(" ")
            const bearerToken = bearer[1]
            const decoded = jwt.verify(bearerToken, tokenKey)
            console.log("decoded", decoded)
            return next()
        }
        else {
            return res.sendStatus(401)
        }
    } catch (error) {
        return res.sendStatus(401).json({ message: "Unauthorized" })
    }
}

app.use(tokenMiddleware)

app.use("/api/suppliers", supplierRoutes)



app.post("/api/login", (req, res) => {
    const { email, password } = req.body

    //kullanıcı adı ve şifre doğruysa bir token üretiyorum!
    if (email == "admin@mail.com" && password == "123") {
        //token expire time: 30 seconds
        const token = jwt.sign({ email: email }, tokenKey, { expiresIn: 30, issuer: "techcareer"})
        return res.json({ message: "Success", token: token })
    }
    else {
       return res.status(401).json({ message: "Unauthorized" })
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}
)