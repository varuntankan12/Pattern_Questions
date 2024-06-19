let size = 6;
let front = size;
for (let i = 0; i < size * 2; i++) {
    let str = '';
    if (i < size) {
        for (let j = 1; j < size; j++) {
            if (j < front) {
                str = "  " + str;
            } else {
                str += "* ";
            }
        }
        front -= 1;
    } else {
        for (let j = 1; j < size; j++) {
            j < i - (size - 2) ? str += "  " : str += "* ";
        }
    }
    console.log(str);
}