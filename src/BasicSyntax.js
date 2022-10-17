export function romanToInteger(str) {
    let result = 0;
    let previous = 0;

    for (let i = 0; i < str.length; i++) {
        const current = letter_to_number(str[i]);

        if (current > previous) {
            result += current - 2 * previous;
        } else {
            result += current;
        }
        previous = current;
    }
    return result;
}

function letter_to_number(letter) {
    switch (letter) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}
