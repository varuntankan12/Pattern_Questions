// let size = 6;
// let front = size;
// for (let i = 1; i <= size; i++) {
//     let str = '';
//     let forward = 1;
//     for (let j = 1; j < size + i; j++) {
//         if (j < front) {
//             str += "  ";
//         } else {
//             str += `${j < size ? forward++ : forward--} `;
//         }
//     }
//     front -= 1;
//     console.log(str);
// }



let size = 5;
let front = size;
let forward = 1;
for (let i = 1; i <= size; i++) {
    let str = '';
    for (let j = 1; j < size + i; j++) {
        if (j < front) {
            str += "  ";
        } else {
            str += `${j < size ? forward++ : j == size + i - 1 ? forward++ : forward--} `;
        }
    }
    front -= 1;
    console.log(str);
}