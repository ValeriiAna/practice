const simpleArr = require('../simpleArr');

describe('simpleArr', () => {
    test('[1,2 , [3,4 , [5]]]', () => {
        expect(simpleArr([1,2 , [3,4 , [5]]])).toEqual([1,2,3,4,5]);
    })
    test('empty arr', () => {
        expect(simpleArr([])).toEqual('tris arr is empty');
    })
    test('arr is not array', () => {
        expect(simpleArr(2345678)).toEqual(false);
    })
    test('[70, 2 , [3,4 ,[15,2,11, [3,4 , [6,7,2, [5]]]]]]', () => {
        expect(simpleArr([70, 2 , [3,4 ,[15,2,11, [3,4 , [6,7,2, [5]]]]]])).toEqual([
                70, 2, 3, 4, 15, 2,
                11, 3, 4, 6,  7, 2,
                5
            ]);
    })
})