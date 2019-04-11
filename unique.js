function unique(ary) {
    let unique = true;
    for(let i = 0; i < ary.length; i++) {
        for(let j = 0; j < ary.length; j++) {
            if (i !== j && (ary[i] !== '.' || ary[j] !== '.') && ary[i] === ary[j]) {
                unique = false;
            }
        }
    }
    return unique;
}
console.log(unique([1, 2]));