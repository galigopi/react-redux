const express = require('express')

const app = express();
app.use(express.json())

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log("server listing ", PORT)
})

app.get('/status' ,(request, response)=>{
    const status = {
        "Status": "Running"
     };
     
     response.send(status);
});