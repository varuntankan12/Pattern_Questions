let size = 6;
let front = 0;
for (let i = 1; i <= size; i++) {
    let str = '';
    for (let j = 0; j < (size * 2) - i; j++) {
        str += `${j < front ? "  " : "* "}`
    }
    front += 1;
    console.log(str);
}