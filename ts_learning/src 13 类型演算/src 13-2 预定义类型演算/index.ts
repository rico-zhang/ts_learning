interface Article {
  title: string;
  createDate: Date;
  publishDate?: Date;
}

interface Blog {
  content: string;
  createDate: Date;
  publishDate?: Date;
}
//将所有属性变为可选
const a1: Partial<Article> = {};

//将所有属性变为必填
const a2: Required<Article> = {
  title: '',
  createDate: new Date(),
  publishDate: new Date(),
};

//将所有属性变为只读
const a3: Readonly<Article> = {
  title: '',
  createDate: new Date(),
};

type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';
const a4: Exclude<A, B> = 'a';
const a5: Extract<A, B> = 'b';
const a6: Extract<A, B> = 'c';

let a7: Pick<Article, 'title' | 'createDate'> = {
  title: '',
  createDate: new Date(),
};

let a8: Omit<Article, 'title' | 'publishDate'> = {
  createDate: new Date(),
};

let a9: Record<'a' | 'b', Article> = {
  a: {
    title: '',
    createDate: new Date(),
  },
  b: {
    title: '',
    createDate: new Date(),
  },
};

type Gender = '男' | '女' | undefined | null;
let a10: NonNullable<Gender> = '男';
let a11: NonNullable<Gender> = '女';

function sum(a: number, b: number) {
  return a + b;
}

let paramsArr: Parameters<typeof sum> = [1, 2];
let result: ReturnType<typeof sum> = 1;

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {}
}

let constructorParams: ConstructorParameters<typeof Person> = ['rico', 18];
let instancePerson: InstanceType<typeof Person> = { name: 'rico', age: 18 };

type Str = 'aBcDeFg';
type Str2 = 'AbCdEfG';

let str1: Uppercase<Str> = 'ABCDEFG';
let str2: Lowercase<Str> = 'abcdefg';
let str3: Capitalize<Str> = 'ABcDeFg';
let str4: Uncapitalize<Str2> = 'abCdEfG';
