let length = 12;
let breadth = 6;
for (let i = 1; i <= breadth; i++) {
    let str = '';
    for (let j = 1; j <= length; j++) {
        if (i == 1 || i == breadth || j == 1 || j == length) {
            str += "* ";
        } else {
            str += "  ";
        }
    }
    console.log(str);
}
