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
// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん！`);
// sayHello();

// ======================
// スプレッド構文　...

// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// // ...の後に配列を書くと配列の中身を展開してくれる
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// ...をつければ中身を展開
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
