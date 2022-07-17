interface User {
  name: string;
  age: number;
  sayHello(): void;
  sayHello1: () => void;
}

type UserT = {
  name: string;
  age: number;
  sayHello(): void;
  sayHello1: () => void;
};

let user: User = {
  name: 'rico',
  age: 18,
  sayHello() {
    console.log('hello');
  },
  sayHello1: () => {
    console.log('hello1');
  },
};

let usert: UserT = {
  name: 'rico',
  age: 18,
  sayHello() {
    console.log('hello');
  },
  sayHello1: () => {
    console.log('hello1');
  },
};

// type ConditionT = {
//   (n: number): boolean;
// };
type ConditionT = (n: number) => boolean;

interface Condition {
  (n: number): boolean;
}

function sum(numbers: number[], callback: Condition) {
  let s = 0;
  numbers.forEach((n) => {
    if (callback(n)) {
      s += n;
    }
  });
  return s;
}

function sumT(numbers: number[], callback: ConditionT) {
  let s = 0;
  numbers.forEach((n) => {
    if (callback(n)) {
      s += n;
    }
  });
  return s;
}

interface A {
  T1: string;
}
interface B {
  T2: number;
}

interface C extends A, B {
  // T1:number; //不能覆盖父接口的成员
  T3: boolean;
}

type AT = {
  T1: string;
};

type BT = {
  T2: number;
};

//T1的类型为 string &  number
type CT = {
  T1: number;
  T3: boolean;
} & AT &
  BT;

let c: C = {
  T1: 'dsfd',
  T2: 12,
  T3: true,
};

// let ct: CT = {
//   // T1: 'eef',
//   T2: 23,
//   T3: true,
// };

interface Person {
  readonly id: string;
  name: string;
  age: number;
  //整个arr不能赋值    arr不能push pop [0]='1'等改变项的方法
  readonly arr: readonly string[];
  readonly arr1: ReadonlyArray<string>;
}

type PersonT = {
  readonly id: string;
  name: string;
  age: number;
  readonly arr: readonly string[];
  readonly arr1: ReadonlyArray<string>;
};

let p: Person = {
  id: '234',
  name: 'rico',
  age: 18,
  arr: ['23', '33'],
  arr1: ['234'],
};

let pt: PersonT = {
  id: '234',
  name: 'rico',
  age: 18,
  arr: ['23', '33'],
  arr1: ['234'],
};
//只读 不能更改
// p.id = '55';
// pt.id = '55';
// p.arr = ['2']
// pt.arr = ['2']
// p.arr.push('1')
// pt.arr.push('1')
// p.arr1.push('1')
// pt.arr1.push('1')

const arr: readonly number[] = [3, 4, 5];
const arr1: ReadonlyArray<number> = [3, 4, 5];
//只读 不能修改
// arr.push(1)
// arr1.push(1)

interface Duck {
  sound: '嘎嘎嘎';
  swin(): void;
}

let person = {
  name: '伪装成鸭子的人',
  age: 11,
  sound: '嘎嘎嘎' as '嘎嘎嘎',
  swin() {
    console.log(this.name + '正在游泳，并发出了' + this.sound + '的声音');
  },
};

//字面量直接赋值 不能完成赋值 有多余的 name age 属性
// let duck: Duck = {
//   name: '伪装成鸭子的人',
//   age: 11,
//   sound: '嘎嘎嘎' as '嘎嘎嘎',
//   swin() {
//     console.log(this.name + '正在游泳，并发出了' + this.sound + '的声音');
//   },
// };

//赋值变量 可以完成赋值 只要含有 sound swin属性即可
//因为ts考虑到变量可能是后台或其他方法得出的  所以只要满足应有的属性即可
let duck: Duck = person;

interface Cond {
  (n: number, i: number): boolean;
}

function sums(numbers: number[], callback: Cond) {
  let s = 0;
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (callback(n, i)) {
      s += n;
    }
  }
  return s;
}
//函数参数可以少 但不可以多
const result1 = sums([1, 3, 4], (n) => n % 2 === 0);
const result2 = sums([1, 3, 4], (n, i) => i % 2 === 0);
let con: Cond = (n) => n % 2 === 0;
let con1: Cond = (n, i) => i % 2 === 0;
