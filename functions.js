
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function convertToSeconds(minutes) {
    return minutes * 60;

}

export function areaOfTriangle(base, height) {
    return (base * height) / 2;
}

export function lessThanHundred(a, b) {
    return add(a, b) < 100;
}

export function formatName(first, last, middle) {
    let name = first;

    if (middle) {
        name = name + ' ' + middle;
    }
    name = name + ' ' + last;

    return name;

}