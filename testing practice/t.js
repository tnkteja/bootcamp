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

export calculator