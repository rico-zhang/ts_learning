let str: string = 'aaa';
let num: number = 21;
let isTrue: boolean = false;
let arr: number[] = [1, 2, 4];
let arr1: Array<number> = [3, 6];
let obj: object = { a: 1 };
let n: null = null;
let u: undefined = undefined;

//参数为联合类型
function typeProtect(str: string | undefined) {
  if (typeof str === 'string') {
    //typeof 触发类型保护 在这里一定是string
    str.toLocaleLowerCase();
  }
  if (str) {
    //str为真 触发类型保护 在这里一定是string
    str.toUpperCase();
  }
  //没有类型保护
  str?.toUpperCase();
}
//void 表示函数没有返回值
function returnVoid(a: number): void {
  console.log(a);
}

//never 表示函数永远不可能结束
function neverFinish(): never {
  throw new Error('永远不可能结束');
}

function neverFinish1(): never {
  while (true) {}
}

//字面量类型
let stra: 'a' = 'a';
let obja: { a: number } = { a: 1 };

//元组类型
let tuple: [string, number] = ['1', 2];

//any类型 可以绕过检查 任何类型可以复制给any any可以赋值给任何类型
let anya: any = '1';
let numbera: number = anya;

//类型别名
type Gender = '男' | '女';
type User = {
  name: string;
  age: number;
  gender: Gender;
};

let user: User = {
  name: 'rico',
  age: 18,
  gender: '男',
};

function getUsers(g: Gender): User[] {
  return [];
}

//函数重载
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
}
combine(1, 2).toFixed(); //返回值是number
combine('1', '2').toLowerCase(); //返回值是string
// combine(1, '2'); //ts报错 参数类型不符合

//可选参数
function sum(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  }
  return a + b;
}
sum(1, 2);
sum(1, 2, 3);

//默认参数
function sum1(a: number, b: number, c: number = 0) {
  return a + b + c;
}
sum1(1, 2);
sum1(1, 2, 3);
