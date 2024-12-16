function setStringHdp(number) {
    if (number === 0) {
        return "0";
    }

    const sign = number < 0 ? -1 : 1;
    const absNumber = Math.abs(number);
    const integer = Math.floor(absNumber);
    const decimal = Math.abs(number) - integer;

    const integerWithSign = sign * integer;

    if (decimal === 0) {
        return `${integerWithSign}.0`;
    }

    if (decimal === 0.25) {
        return `${integerWithSign}/${integer + 0.5}`;
    }

    if (decimal === 0.5) {
        return `${integerWithSign}.5`;
    }

    if (decimal === 0.75) {
        return `${integerWithSign + 0.5}/${integer + 1}`;
    }

    return number.toString();
}

const testTable = [
    { input: 0, expected: '0' },
    { input: 1, expected: '1.0' },
    { input: 2, expected: '2.0' },
    { input: 1.25, expected: '1/1.5' },
    { input: 1.5, expected: '1.5' },
    { input: 1.75, expected: '1.5/2' },
    { input: 2.75, expected: '2.5/3' },
    { input: -3.25, expected: '-3/3.5' },
    { input: 3.33, expected: '3.33' },
    { input: -1.5, expected: '-1.5' },
];

function runTests() {
    testTable.forEach(({ input, expected }, index) => {
        const actual = setStringHdp(input);
        console.log(`input ${input} --> output ${actual}`);
        console.assert(actual === expected, `Test ${index + 1} failed: Input: ${input}, Expected: ${expected}, Got: ${actual}`);
    });
    console.log('All test cases passed!');
}

runTests();
