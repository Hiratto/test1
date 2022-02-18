// 分割代入

// const myPlofile = {
//   name: "Hiratto",
//   age: 35
// };

// const message1 = `名前は${myPlofile.name}です。年齢は${myPlofile.age}歳です。`;
// console.log(message1);

// // テンプレートリテラルの中身が短くて済む
// const { name, age } = myPlofile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列に分割代入

// const myPlofile = ['Hiratto',35];
// const message3 = `名前は${myPlofile[0]}です。年齢は${myPlofile[1]}歳です。`;
// console.log(message3);

// const [name,age] = myPlofile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// ======================
// デフォルト値

// 引数に何もないとundifinedと表示されるが、(name = 'ゲスト')のように
// デフォルト値を設定するとその文字列が表示される
const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん！`);
sayHello();
