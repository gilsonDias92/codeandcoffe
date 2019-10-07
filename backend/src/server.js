const express = require("express");
// express é um framework com funcionalidades (library)
//require() importa dep. externa

const app = express();

app.use(express.json());
app.post("/users", (req, res) => {
    //testando isomnia 
    return res.json(req.body);
});

app.listen(9999);
