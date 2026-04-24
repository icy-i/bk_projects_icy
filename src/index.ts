import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const hey = "Hello Lokesh!";

const users = [
    { id: 1, name: "A", email: "alice@example.com" },
    { id: 2, name: "ok", email: "ok@example.com" },
    { id: 3, name: "3", email: "charlie@example.com" },
];
app.get("/",(_req,res)=>{
    res.send(hey);
});

app.get("/users",(_req,res)=>{
    res.json(users);
})

app.get("/users/:id",(req,res) => {
    const id = Number(req.params.id);
    const user = users.find((u)=> u.id === id);

    if(user){
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("Available endpoints:");
    console.log(`GET http://localhost:${PORT}/ - Returns a greeting message`);
    console.log(`GET http://localhost:${PORT}/users - Returns a list of users`);
    console.log(`GET http://localhost:${PORT}/users/:id - Returns a user by ID`);
});