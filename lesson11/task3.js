async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log('Fetched todo:', data)
  return data;
}

async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  console.log('Fetched user:', data)
  return data;
}


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