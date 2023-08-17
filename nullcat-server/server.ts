import express, { Application } from 'express';
const PORT = process.env.PORT || 3000;
const app:Application = express()

app.listen(PORT , () => {
    console.log("listing on" , " " , PORT)
})

