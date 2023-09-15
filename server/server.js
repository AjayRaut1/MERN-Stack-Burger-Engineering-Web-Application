import app from "./app.js"

app.get("/", (req, res, next) => {
    res.send("<h1>Server is Working ...</h1>")
});

app.listen(process.env.PORT, ()=> 
    console.log(`Server is working on PORT : ${process.env.PORT}`)
);