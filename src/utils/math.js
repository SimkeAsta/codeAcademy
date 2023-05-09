export const sum = (a, b) => {
    return a + b
};

export const sub = (a, b) => a - b;

export const getSumArr = (arr) => {
    return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}