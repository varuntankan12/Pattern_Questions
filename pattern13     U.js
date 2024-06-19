let size = 6;
let front = size;
for (let i = 0; i < size; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        let num = 1;
        num = pascle(i, j);

        str += `${num} `;
    }
    front -= 1;
    console.log(str);
}

function pascle(i, j) {
    let num = 1;
    if (j > i - j) {
        j = i - j;
    }
    for (let k = 0; k < j; k++) {
        num = num * (i - j) + j;
        // console.log(num);
    }
    return num;
}

// int res = 1;
// if (k > n - k)
//     k = n - k;
// for (int i = 0; i < k; ++i) {
//     res *= (n - i);
//     res /= (i + 1);
// }