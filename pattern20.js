let size = 7;
for (let i = 0; i < size * 2; i++) {
    let str = '';
    if (i < size) {
        for (let j = 0; j <= i; j++) {
            str += `${i % 2 == 0 ? "*" : "-"} `;
        }
    } else {
        for (let j = size - (i - size) - 1; j > 0; j--) {
            str += `${i % 2 == 0 ? "*" : "-"} `;
        }
    }
    console.log(str);
}