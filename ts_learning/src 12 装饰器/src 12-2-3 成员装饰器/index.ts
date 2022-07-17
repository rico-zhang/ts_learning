@clsMark
class A {
  @fieldMark
  name: string = 'rico';
  @fieldMark
  static arr: A[] = [];

  @methodMark
  sayHello() {}
  @methodMark
  static getInstance() {}
}

function clsMark(target: new () => void) {
  target.prototype.$clsMark = '类名 :' + target.name;
}

function fieldMark(target: any, name: string) {
  const isStatic = target.prototype !== undefined;
  const t = isStatic ? target.prototype : target;
  if (!t.$fieldMark) t.$fieldMark = {};
  t.$fieldMark[(isStatic ? '静态' : '') + '字段名' + name] = name;
}

function methodMark(target: any, name: String, desc: PropertyDescriptor) {
  const isStatic = target.prototype !== undefined;
  const t = isStatic ? target.prototype : target;
  if (!t.$methodMark) t.$methodMark = {};
  t.$methodMark[(isStatic ? '静态' : '') + '方法名' + name] = name;
  console.log(desc);

  desc.enumerable = true;
}

let a = new A();
console.log((a as any).$clsMark);
console.log((a as any).$fieldMark);
console.log((a as any).$methodMark);
a.sayHello();
A.getInstance();

for (const key in a) {
  console.log(key);
}
console.log('======');

for (const key in A) {
  console.log(key);
}
