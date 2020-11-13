const app = require("./src/app")
const PORT = 3030

//const PORT = process.env.PORT || 3030
app.listen(PORT, function () {
    console.log(`Servidor rodando...${PORT}`);
})

module.exports = app