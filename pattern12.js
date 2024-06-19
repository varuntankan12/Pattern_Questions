let size = 6;
let front = 1;
for (let i = 0; i < (size * 2) + 1; i++) {
    let str = '';
    if (i < size) {
        for (let j = 0; j < size + i - 1; j++) {
            j < size - i ? str += "  " : str += "* ";
        }
    } else {
        for (let j = 1; j < (size * 2) - (i - size); j++) {
            j >= front ? str += "* " : str += "  ";
        }
        front += 1;
    }

    console.log(str);
}