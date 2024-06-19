let size = 6;
let front = 1;
for (let i = 1; i <= size; i++) {
    let str = '';
    for (let j = 1; j <= size + front; j++) {
        j < front ? str += "  " : str += "* ";
    }
    front += 1;
    console.log(str);
}
