const app = require("./src/app");
const config = require("./src/config/config");
const connectDb = require("./src/config/db");


const port = config.PORT

connectDb()

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})