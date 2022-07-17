// - typeof

// TS中的typeof，书写的位置在类型约束的位置上。

// 表示：获取某个数据的类型

// 当typeof作用于类的时候，得到的类型，是该类的构造函数

const str: string = 's';

let str1: typeof str = 'r';

class User {
  id: string;
}
class Person {
  age: number;
}
let u = new User();
let u1: typeof u;

function test(Cls: new () => void) {
  console.log(Cls);
}
function test1(Cls: typeof User) {
  console.log(Cls);
}

test(User);
test(Person);

test1(User);
// test1(Person);//ts 报错
