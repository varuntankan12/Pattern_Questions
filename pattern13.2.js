let size = 6;
let temp = 1;
for (let i = 1; i < size; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += `${temp++} `;
    }
    console.log(str);
}