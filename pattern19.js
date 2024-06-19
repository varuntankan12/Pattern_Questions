let size = 6;
let front = size;
for (let i = 1; i <= size; i++) {
    let str = '';
    let frontset = false;
    for (let j = 1; j < size + i; j++) {
        if (j < front) {
            str = "  " + str;
        } else {
            str += `${frontset ? j == size + i - 1 ? "*" : "-" : "*"} `;
            frontset = true;
        }
    }
    front -= 1;
    console.log(str);
}

