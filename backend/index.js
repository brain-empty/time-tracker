const express = require ('express')
const app = express ()

app.use(express.json( {extended:true} ))
app.use(express.urlencoded())

const cors = require ("cors");
app.use(cors());

app.listen ('3001', console.log("listening on 3001"))

app.get("/postActivity", async (req,res) => {
    const activityEntry = req.body.activityEntry;
    console.log ("postActivity request for obj = ", activityEntry )
})