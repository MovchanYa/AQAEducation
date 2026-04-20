function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => {console.error('Error:', error);})
}

// fetchTodo()
//   .then(todo => {
//     console.log('Fetched todo:', todo);
//     console.log('Title:', todo.title);
//   })


function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')        
        .then(response => response.json())
        .catch(error => {console.error('Error:', error);});
}

// fetchUser()
//   .then(user => {
//     console.log('Fetched user:', user);
// })


Promise.all([fetchTodo(), fetchUser()])
  .then(values => {
    const [todo, user] = values;
    console.log('Fetched todo:', todo);
    console.log('Fetched user:', user);
  })

Promise.race([fetchTodo(), fetchUser()])
  .then(value => {
    console.log('First resolved value:', value);
  })