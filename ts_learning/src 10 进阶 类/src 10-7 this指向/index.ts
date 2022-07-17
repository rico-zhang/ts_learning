//tsconfig noImplicitThis：true 表示代码中this执行为饮食any的时候报错
const u = {
  name: 'rico',
  age: 18,
  sayHello() {
    //在这里写 this.不会有 name age sayHello的提示 因为ts认为很有可能这样调用 const say =u.sayHello; say();
  },
};

class User {
  name: string = 'rico';
  age: number = 18;
  [x: string]: any;
  sayHello = () => {
    //在这里写this.会有 name age sayHello的提示 因为ts认为调用sayHello方法的时候大多数都是 实例.sayHello,其实是忽略了const say =实例.sayHello; say();
    console.log(this);
  };
}

interface IUser {
  name: string;
  age: number;
  //标记this的指向 并不需要传递这个参数
  sayHello(this: IUser): void;
}

class Person implements IUser {
  name: string = 'rico';
  age: number = 18;
  gender: '男' | '女' = '男';
  //这里的this标记可以更改
  sayHello(this: Person): void {
    console.log(this);
  }
}

const p = new Person();
p.sayHello();

//标记this的指向 并不需要传递这个参数
function sayHello(this: any, n: number) {
  console.log(this);
}

sayHello(1);
