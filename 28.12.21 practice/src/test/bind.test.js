const simpleFunc = require('../bind');

describe('simpleFunc', () => {
    // test('newFunc', () => {
    //     expect(newFunc({a:100,b:400,c:50,d:10,e:2}, 2)).toBe(229);
    // })
    test('newFunc', () => {
        expect(newFunc({a:200,b:100,c:550,d:1670,e:12}, 2)).toBe(704);
    })
})