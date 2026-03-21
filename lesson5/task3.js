import chalk from 'chalk';

const number = 3;
let i = 1;

for (; i < 11; i++) {
    console.log(chalk.hex('#FFA500')(number) + " x " + chalk.blue(i) + " = " + chalk.blue(number * i));
} 

console.log("-----------");

i = 1;

while (i < 11) {
    console.log(chalk.hex('#FFA500')(number) + " x " + chalk.blue(i) + " = " + chalk.blue(number * i));
    i++;
}