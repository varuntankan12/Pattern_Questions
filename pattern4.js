let size = 6;
for (let i = size; i >= 1; i--) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += `* `;
    }
    console.log(str);
}
