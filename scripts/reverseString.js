export function reverseString(str) {
    str = Array.from(str);

    let reverse = []
    for (let i = str.length - 1; i >= 0; i--) {
        reverse.push(str[i]);
    }

    return reverse.join("");
}
