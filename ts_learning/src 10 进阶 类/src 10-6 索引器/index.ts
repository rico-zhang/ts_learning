class A {
  [props: string]: any;
}

const a: A = new A();
console.log(a['test']);
