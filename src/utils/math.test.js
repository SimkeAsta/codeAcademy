import { sum } from './math';

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

    });
});