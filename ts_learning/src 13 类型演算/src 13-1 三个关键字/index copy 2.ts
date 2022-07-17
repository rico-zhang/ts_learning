// - keyof
// 作用于类、接口、类型别名，用于获取其他类型中的所有成员名组成的联合类型

class Student {
  id: string;
  name: string;
  age: number;
}

function getPropValue(s: Student, prop: 'id' | 'name' | 'age') {
  return s[prop];
}
function getPropValue1(s: Student, prop: keyof Student) {
  return s[prop];
}
