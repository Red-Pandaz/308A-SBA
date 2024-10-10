import express from 'express'
import path from 'path'
const app = express()
const PORT = 3000
const __dirname = path.resolve();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});
app.use(express.static(path.join(__dirname, '/')))

app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`)
})
