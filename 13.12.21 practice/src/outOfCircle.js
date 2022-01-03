function outOfCircle() {
    let result = '';
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                break;
            }
            result = result.concat(`${i} ${j} `);

        }
    }
    return result;
}
console.log(outOfCircle());

module.exports = outOfCircle;