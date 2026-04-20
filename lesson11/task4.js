class todoClass {
    constructor(url) {
        this.url = url;
    }

    async fetchTodo() {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }
}

class userClass {
     constructor(url) {
        this.url = url;
    }

    async fetchUser() {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }
}


async function fetchData() {
    const todoOne = new todoClass('https://jsonplaceholder.typicode.com/todos/1');
    const userOne = new userClass('https://jsonplaceholder.typicode.com/users/1');

    Promise.all([todoOne.fetchTodo(), userOne.fetchUser()])
        .then(values => {
             const [todo, user] = values;
            console.log('Fetched todo:', todo);
            console.log('Fetched user:', user);
    })
    
    Promise.race([todoOne.fetchTodo(), userOne.fetchUser()])
        .then(value => {
            console.log('First resolved value:', value);
    })
}
fetchData();

