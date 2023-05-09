import { getSumArr, sub, sum } from './math';

describe('math.js', () => {
    describe('sum', () => {
        // test('returns correct sum if passed arguments are numbers', () => {
        //     expect(sum(1, 1)).toBe(2);
        // });

        test.each([[1, 1, 2], [4, 10, 14], [-99, 99, 0]])(
            'adds %p + %p and returns %p',
            (a, b, result) => {
                expect(sum(a, b)).toBe(result);
            }
        )
    });

    describe('sub', () => {
        test.each([[2, 1, 1]])(
            'subtracts %p - %p and returns %p',
            (a, b, result) => {
                expect(sub(a, b)).toBe(result);
            }
        )
    });

    describe('getSumArr', () => {
        test.each([[ [1, 2, 3], 6 ]])(
            'returns array %p sum %p',
            (arr, result) => {
                expect(getSumArr(arr)).toBe(result);
            }
        )
    });
});