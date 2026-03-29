function checkOrder(available, ordered) {
    if (available < ordered) {
    console.log("Your order is too large, we don’t have enough goods.");
    } else if (ordered === 0) {
        console.log("Your order is empty");
    } else {
        console.log("Your order is accepted");
    }
}

checkOrder(0, 300);
checkOrder(300, 0);
checkOrder(300, 300); 