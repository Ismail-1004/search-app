import express from "express"
import cors from "cors"
import router from "./routes/index"
import errorHandler from "./middleware/ErrorHandlingMiddleware"

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))