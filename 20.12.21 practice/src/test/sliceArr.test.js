const sliceArr = require('../sliceArr');

describe('sliceArr', () => {
    test('[1,2,3,4,5], arrSize = 2', () => {
        expect(sliceArr([1,2,3,4,5])).toEqual([ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]);
    })
    test('empty arr', () => {
        expect(sliceArr([])).toEqual(false);
    })
    test('not an arr', () => {
        expect(sliceArr(23456)).toEqual(false);
    })
    test('[5,15,6,16,7,17,8,18], arrSize = 2', () => {
        expect(sliceArr([5,15,6,16,7,17,8,18])).toEqual([ [ 5, 15 ], [ 6, 16 ], [ 7, 17 ], [ 8, 18 ] ]);
    })

})