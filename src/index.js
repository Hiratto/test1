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

// 配列のコピー・結合

// const arr4 = [10,20];
// const arr5 = [40,50];

// // 配列をコピーする
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// mapやfilterを使った配列の処理

// const nameArr = ["山田","田中","伊藤"];

// // const nameArr2 = nameArr.map((name)=>{
// //   return name;
// // });

// // console.log(nameArr);

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// // 特定の人だけ「さん」づけにする
// const newNameArr = nameArr.map((name)=>{
//   if (name === "山田") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })

// console.log(newNameArr);

// ======================

// 三項演算子

// ある条件　？　　条件がtrueの時　: 条件がfalseの時　；
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num ='1300';
// // 3桁区切りでカンマを打ちたい時は”toLocaleString”
// // console.log(num.toLocaleString());

// // 文字列エラーを知らせる
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// 足した数が100を超えているか？
// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えています'　: '許容範囲です';
// }

// console.log(checkSum(50,40));

// ======================

// 論理演算子の本当の意味を知ろう　 && ||

// const flag1 = true;
// const flag2 = false;

// || または
// if (flag1 || flag2){
//   console.log('1か2はTrueになります');
// }

// && かつ
// if (flag1 && flag2){
//   console.log('1も2もTrueになります');
// }

// ||は左側が　falseなら右側を返すという意味
// const num = null;
// const fee = num || '金額未設定です';
// console.log(fee);

// &&は左側が　trueなら右側を返すという意味
// const num2 = 100;
// const fee2 = num2 && '何か設定されました';
// console.log(fee2);

// ======================
