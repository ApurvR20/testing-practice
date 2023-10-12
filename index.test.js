import { capitalize,reverseString,calculator, caesarCipher,analyzeArray } from ".";

//tests for capitalize

test('checking Capitalize',() => {
    expect(capitalize('apurv rajput')).toBe('Apurv rajput');
    expect(capitalize('Apurv rajput')).toBe('Apurv rajput');
});

//tests for reverseString

test('check reverse String', ()=>{
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('all hello')).toBe('olleh lla');
})

//tests for calculator
test('add', ()=>{
    expect(calculator.add(3,5)).toBe(8);
    expect(calculator.add(-3,-4)).toBe(-7);
})

test('subtract', ()=>{
    expect(calculator.subtract(3,5)).toBe(-2);
    expect(calculator.subtract(-3,-4)).toBe(1);
})

test('multiply', ()=>{
    expect(calculator.multiply(0,5)).toBe(0);
    expect(calculator.multiply(-3,-4)).toBe(12);
    expect(calculator.multiply(5,4)).toBe(20);
})

test('divide', ()=>{
    expect(calculator.divide(8,4)).toBe(2);
    expect(calculator.divide(-3,-4)).toBe(0.75);
    expect(calculator.divide(4,0)).toBe(Infinity);
})

//test for caesarCipher

test('cipher check', ()=>{
    expect(caesarCipher("attack at dawn",5)).toBe("fyyfhp fy ifbs");
    expect(caesarCipher("ABCDE fgHJ", 1)).toBe("BCDEF ghIK");
    expect(caesarCipher("z, Z",2)).toBe("b, B");
})

//test analyzeArray
test('analyze array', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average : 4, min: 1, max: 8, length: 6});
})

