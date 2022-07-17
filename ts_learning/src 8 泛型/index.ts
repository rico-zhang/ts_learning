interface HasNameProperty {
  name: string;
}

//将某个对象的name属性的每个单词的首字母大小，然后将该对象返回
function nameToUpperCase<T extends HasNameProperty>(obj: T): T {
  obj.name = obj.name
    .split(' ')
    .map((s) => s[0].toUpperCase() + s.substring(1))
    .join(' ');
  return obj;
}

const o = {
  name: 'rico zhang',
  age: 18,
};

const newO = nameToUpperCase(o);
console.log(newO);

//将两个数组进行混合
//[1,3,4] + ["a","b","c"] = [1, "a", 3, "b", 4, "c"]
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
  if (arr1.length != arr2.length) {
    throw new Error('两个数组的长度不相等');
  }
  let result: (T | K)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}
const result = mixinArray([1, 2, 3], ['a', 'b', 'c']);
result.forEach((it) => {
  console.log(it);
});
//接口使用泛型
interface User<T> {
  id: T;
  name: string;
}

let user: User<string> = {
  id: '2342',
  name: 'rico',
};
let user1: User<number> = {
  id: 2342,
  name: 'rico',
};

//类型使用泛型
type UserT<T> = {
  id: T;
  name: string;
};

let usert: UserT<string> = {
  id: '2342',
  name: 'rico',
};
let usert1: UserT<number> = {
  id: 2342,
  name: 'rico',
};

//接口中使用类型
class Person<T> {
  id: T;
  name: string;
  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }
}

let p = new Person('11', 'rico');
let p1 = new Person(86786, 'rico');
