/**
 * const let等の変数宣言
 * */

// var val1 = "hogehoge";
// console.log(val1);

// var val1 = 'fugafuga';
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "gogogog";
// console.log(val2);

// // letは再宣言できない
// let val2 = "iiiiii";

// const val3 = 'constですよ'
// console.log(val3)

// // constは上書き不可で再宣言もできない
// const val3 = 'もいっちょconst'

// const val4 = {
//   name: 'なまえです',
//   age: 50
// }
// val4.address = '住所です'

// val4.name = '違う名前です'
// console.log(val4)

// const val5 = ['dog', 'cat']
// val5[0] = 'bird'
// val5.push('mouse')
// console.log(val5)

// const myProfile = {
//   name: "なまえ",
//   age: 30
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

const myProfile = ["なまえ", 30];

const [name, age] = myProfile;
console.log(`私の名前は${name}です。年齢は${age}です。`);
