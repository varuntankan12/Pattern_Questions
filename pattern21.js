let size = 6;
let front = 0;
for (let i = 1; i <= size; i++) {
    let str = '';
    frontset = false;
    for (let j = 0; j < (size * 2) - i; j++) {
        if (j < front) {
            str += "  ";
        } else {
            str += `${frontset ? j < (size * 2) - i - 1 ? "- " : "* " : "* "}`;
            frontset = true;
        }
    }
    front += 1;
    console.log(str);
}