function recursiya (num) {
    console.log(num);
    if (num === 0) return;
        recursiya(num - 1);
    }

recursiya(5);
