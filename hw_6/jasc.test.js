'use strict'
let anyString = 'Easy peasy lemon squeezy';
let o = String("Hey, Lini!");
let arr = [5, 2, 8, 4, 9, 1];
let eArr = arr.entries();
let arr_text = ['easy', 'peasy', 'lemon', 'squeezy'];
let Aarr = arr.values();

test('test_string', () => {
  expect(String.fromCharCode(210, 95, 211)).toEqual("Ò_Ó");
  expect(anyString.charAt(2)).toEqual("s");
  expect('LINCOLN'.charCodeAt(0)).toEqual(76);
  expect('LINCOLN'.codePointAt(2)).toEqual(78);
  expect(('Easy peasy ').concat('lemon squeezy')).toEqual('Easy peasy lemon squeezy');
  expect(anyString.endsWith('lemon')).toEqual(false);
  expect(anyString.includes('Peasy')).toEqual(false);
  expect(anyString.indexOf('E')).toEqual(0);
  expect(anyString.lastIndexOf('q')).toEqual(18);
  expect(anyString.localeCompare('й')).toEqual(-1);
  expect(anyString.match(/pe[ao]sy/gi)).toEqual(["peasy"]);
  expect('M\u0307\u0323'.normalize()).toEqual("Ṃ̇");
  expect('LIN'.padEnd(7, "COLN")).toEqual("LINCOLN");
  expect('LN'.padStart(7, "LINCO")).toEqual("LINCOLN");
  expect('LINCOLN'.repeat(5)).toEqual("LINCOLNLINCOLNLINCOLNLINCOLNLINCOLN");
  expect(anyString.replace("lemon", "peasy")).toEqual("Easy peasy peasy squeezy");
  expect(anyString.search(/lemon/)).toEqual(11);
  expect('LINCOLN'.slice(1, 4)).toEqual("INC");
  expect(anyString.startsWith("lemon", 11)).toEqual(true);
  expect(anyString.substring(4)).toEqual(" peasy lemon squeezy");
  expect(anyString.toLocaleLowerCase()).toEqual("easy peasy lemon squeezy");
  expect(anyString.toLocaleUpperCase()).toEqual("EASY PEASY LEMON SQUEEZY");
  expect('LINCOLN'.toLowerCase()).toEqual("lincoln");
  expect(o.toString()).toEqual("Hey, Lini!");
  expect('lincoln'.toUpperCase()).toEqual("LINCOLN");
  expect(' LINCOLN '.trim()).toEqual("LINCOLN");
  expect(anyString.valueOf()).toEqual("Easy peasy lemon squeezy");
  expect(String.raw`Lini\n${5+3}!`).toEqual("Lini\\n8!");
});

test('test_numbers', () => {
  expect(Number.isFinite(5)).toEqual(true);
  expect(Number.isInteger(5.5)).toEqual(false);
  expect(Number.isNaN(55)).toEqual(false);
  expect(Number.isSafeInteger(555)).toEqual(true);
  expect(Number.parseFloat("5.55")).toEqual(5.55);
  expect(Number.parseInt("5.5")).toEqual(5);
  expect((55).toExponential()).toEqual("5.5e+1");
  expect((55.555).toFixed(1)).toEqual("55.6");
  expect((5).toString(2)).toEqual("101");
  expect((5).valueOf()).toEqual(5);
});

test('test_arrays-1', () => {
  expect([5, 2, 8].concat([4, 9, 1])).toEqual([5, 2, 8, 4, 9, 1]);
});

test('test_arrays-2', () => {
  expect(arr.join('|')).toEqual("5|2|8|4|9|1");
});

test('test_arrays-3', () => {
  expect(Array.from('LINCOLN')).toEqual(["L", "I", "N", "C", "O", "L", "N"]);
});

test('test_arrays-7', () => {
  expect(arr.sort()).toEqual([1, 2, 4, 5, 8, 9]);
});

test('test_arrays-4', () => {
  expect(Array.isArray([5, 2, 8])).toEqual(true);
});

test('test_arrays-12', () => {
  expect(arr.includes(0)).toEqual(false);
  expect(arr.indexOf(5)).toEqual(3);
});


test('test_arrays-6', () => {
  expect(arr.slice(1, 3)).toEqual([2, 4]);
});

test('test_arrays-13', () => {
  expect(arr.copyWithin(1, 4)).toEqual([1, 8, 9, 5, 8, 9]);
});



test('test_arrays-8', () => {
  expect(arr.splice(1, 1, 0)).toEqual([8]);
});

test('test_arrays-9', () => {
  expect(arr.toString()).toEqual("1,0,9,5,8,9");
});

test('test_arrays-10', () => {
  expect(Aarr.next().value).toEqual(1);
  expect(Aarr.next().value).toEqual(0);
});

test('test_arrays-11', () => {
  expect(eArr.next().value).toEqual([0, 1]);
  expect(eArr.next().value).toEqual([1, 0]);
  expect(eArr.next().value).toEqual([2, 1]);
  expect(arr.every(elem => elem > 5)).toEqual(false);
  expect(arr_text.lastIndexOf("lemon")).toEqual(2);
  expect(arr_text.map(function (items) {
    return items.length;})).toEqual([4, 5, 5, 7]);
  expect(arr.pop()).toEqual(1);
  expect(arr.push(5)).toEqual(6);
  expect(arr.shift()).toEqual(5);
  expect(arr.unshift([5])).toEqual(6);
  expect(arr_text.filter(word => word.length > 5)).toEqual(['squeezy']);
});

test('test_arrays-5', () => {
  expect(arr.reverse()).toEqual([9, 8, 5, 9, 0, 1]);
  expect(arr.fill(5)).toEqual([5, 5, 5, 5, 5, 5]);
});

test('test_compare_operators', () => {
  expect(5 > 4.5).toEqual(true);
  expect(5 !== 5).toEqual(false);
  expect(5 >= 5 ? "cool" : "not cool").toEqual("cool");
  expect(5 + 5).toEqual(10);
});


test('test_equality_comparison_algorithm', () => {
  expect(null == null).toEqual(true);
  expect('i' + 10).toEqual("i10");
  expect('1' + - '2').toEqual("1-2");
  expect("4" > 5).toEqual(false);
});

