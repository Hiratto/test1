// 分割代入

const myPlofile = {
  name: "Hiratto",
  age: 35
};

const message1 = `名前は${myPlofile.name}です。年齢は${myPlofile.age}歳です。`;
console.log(message1);

// テンプレートリテラルの中身が短くて済む
const { name, age } = myPlofile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);
