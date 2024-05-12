import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({ superSecretCode: "What's your perfect first date?" })
})

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
