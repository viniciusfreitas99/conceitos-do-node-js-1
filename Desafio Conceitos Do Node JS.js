const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(express.json());

const { v4:uuidv4 } = require("uuid"); 
const { request } = require('express');

const customers = [];

app.use(cors());
app.use(express.json());

const users = [];

function checksexistsuseraccount(request,response, next) {
    const { username } = request.headers;

    const user = users.find(user => user.username === username);

    if(!user) {
        return response.status(404).json( {'error: user not found' } );
    }
}

request.user = user;

return next();



app.post("/users", (request, response) => {
   const {name, username} = request.body;



   const userExists = users.find(user => user.username === username);

   if(userexists) {
       return response.status(400).json({error: 'username already exists'});
   }


   const user = { }

   { 
 
    id: uuidv4(),
	name, 
	username,
	todos, []

    }


    users.push(user);

    return response.status(201).json(user);
}) 

app.get("/todos",checksexistsuseraccount, (request, response) => {
    const { user } = request;

    return response.json(user.todos);
}


app.post("/todos",checksexistsuseraccount, (request, response) => {
    const { user } = request;

    const { title, deadline } = request.body;



const todo = { 
	id: uuidv4(), 
	title,
	done: false, 
	deadline: new Date(deadline), 
	created_at: new Date()
}

user.todos.push(todo);

return response.status(201).json(todo);
});

app.put("/todos/:id", checksexistsuseraccount, (request, response) => {
    const { user } = request;

    const { title, deadline } = request.body;
    const { id } = request.params;



const todo = user.todos.find(todo => todo.id === id);

if (!todo) {
    return response.status(404).json({error : 'todo not found'});
}

todo.title = title;
todo.deadline = new Date(deadline);

return response.json(todo);

}); 

app.patch("/todos/:id/done",checksexistsuseraccount, (request, response) => {
    const { user } = request;
    const { id } = request.params;

    const todo = user.todos.find(todo => todo.id === id);

    if (!todo) {
        return response.status(404).json({error : 'todo not found'});
    }

    todo.done = true;

    return response.json(todo);
});


app.delete("/todos/:id:",checksexistsuseraccount, (request, response) => {
    const { user } = request;
    const { id } = request.params;

    const todoindex = user.todos.findindex(todo => todo.id === id);

    if (!todoindex === -1) {
        return response.status(404).json({error : 'todo not found'});
    }


    user.todos.splice(todoindex, 1);

    return response.status(204).json();
});












