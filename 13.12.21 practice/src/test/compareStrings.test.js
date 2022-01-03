const compareStrings = require('../compareStrings');

describe('compareStrings', () => {
    test('compareStrings', () => {
        expect(true).toEqual(true);
    })
    test('compareStrings', ()=> {
        expect(compareStrings('World', 'lorwd')).toEqual(true);
    })
    test('compareStrings', () => {
        expect(compareStrings(2345676, 'kotok')).toEqual('Not string');
    })
    test('compareStrings', () => {
        expect(compareStrings(' ', 'interesT')).toEqual(false);
    })
    test('compareStrings', () => {
        expect(compareStrings('KOn$$akt', 'KONTAKT')).toEqual(false);
    })
    test('compareStrings', () => {
        expect(compareStrings('FAntacY', 'anTACYf')).toEqual(true);
    })
test('compareStrings', () => {
    expect(compareStrings('javaSCript', 'SCRIpTava')).toEqual(false);
})
})