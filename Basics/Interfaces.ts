/*
function showTodos(todo: { title: string, text: string }) {
    console.log(todo.title + ' : ' + todo.text );
}

let myTodo = {title: 'Trash', text: 'Take out trash'};
showTodos(myTodo);

*/

interface TodoInterface {
    title: string;
    text: string;
}

function showTodos(todo: TodoInterface) {
    console.log(todo.title + ' : ' + todo.text );
}

let myTodo = {title: 'Trash', text: 'Take this trash out'};
showTodos(myTodo);
