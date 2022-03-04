export function capitalize(string) {
    string=string.split('');
    string[0]=string[0].toUpperCase();
    string = string.join('');
    return string;
}

export function reverseString(string) {
    string = string.split('');
    string.reverse();
    string=string.join(``);
    return string;
}

export let calculator = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    divide: (a,b) =>  a/b,
    multiply: (a,b) => a*b,
}

export function caesarCipher(string) {
    let newstring='';
    for( let char of string) {
        newstring+=  String.fromCharCode(char.charCodeAt()+1)
    }
    return newstring;
}

export function analyzeArray(array) {
    let sum = array.reduce((a,i)=> a+i);
    return {
        average: sum/array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}