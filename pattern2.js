let size = 6;
for (let i = 0; i < size; i++) {
    let str = '';
    for (let j = 0; j < size; j++) {
        j < i ? str += "  " : str += "* ";
    }
    console.log(str);
}
