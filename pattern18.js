let size = 6;
let front = size;
for (let i = 0; i < size * 2; i++) {
    let str = '';
    if (i < size) {
        for (let j = 1; j < size; j++) {
            if (j < front) {
                str = "  " + str;
            } else {
                str += `${i % 2 == 0 ? "-" : "*"} `;
            }
        }
        front -= 1;
    } else {
        for (let j = 1; j < size; j++) {
            j < i - (size - 2) ? str += "  " : str += `${i % 2 == 0 ? "-" : "*"} `;
        }
    }
    console.log(str);
}