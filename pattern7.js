let size = 6;
let front = size;
for (let i = 1; i <= size; i++) {
    let str = '';
    for (let j = 1; j < size; j++) {
        if (j < front) {
            str = "  " + str;
        } else {
            str += "* ";
        }
    }
    front -= 1;
    console.log(str);
}
