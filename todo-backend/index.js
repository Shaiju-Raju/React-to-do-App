import express from "express"
import dotenv from "dotenv"
import cors from "cors";

dotenv.config();
const app = express()
const port = process.env.PORT;


app.use(cors())
app.use(express.json())


let todos = [];


app.get("/todos", (req,res) => {
    res.json(todos);
})


app.get("/", (req, res) => {
    res.send("the Server is Running");
})

app.post("/todos", (req,res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text
    };

    todos.push(newTodo);
    res.json(todos);
})

app.delete("/todos/:id", (req, res) => {
    const id = Number(req.params.id)

    todos = todos.filter(todo => todo.id !== id);
    res.json(todos)
})

app.put("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedText = req.body.text

    todos = todos.map(todo => 
        todo.id === id ? {...todo, text: updatedText} : todo
    );
    res.json(todos);
});

app.listen(port, () => {
    console.log(`Server is running on${port}`);
})