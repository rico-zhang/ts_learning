import { IFireShow, IWisdomShow, IBalanceShow } from './interfaces';

export abstract class Animal {
  abstract type: string;
  constructor(public name: string, public age: number) {}

  sayHello() {
    console.log(
      `各位观众，大家好，我是${this.type},我叫${this.name},今年${this.age}岁`
    );
  }
}

export class Lion extends Animal {
  type: string = '狮子';
}

export class Tigger extends Animal implements IFireShow {
  type: string = '老虎';
  singleFire(): void {
    console.log(`${this.name}穿越了单火圈`);
  }
  doubleFire(): void {
    console.log(`${this.name}穿越了双火圈`);
  }
}

export class Monkey extends Animal implements IBalanceShow, IFireShow {
  type: string = '猴子';
  soloBridge(): void {
    console.log(`${this.name}表演走独木桥`);
  }
  wire(): void {
    console.log(`${this.name}表演走独钢丝`);
  }
  singleFire(): void {
    console.log(`${this.name}穿越了单火圈`);
  }
  doubleFire(): void {
    console.log(`${this.name}穿越了双火圈`);
  }
}

export class Dog extends Animal implements IWisdomShow {
  type: string = '狗';
  calc(): void {
    console.log(`${this.name}表演做算术题`);
  }
  dance(): void {
    console.log(`${this.name}表演跳舞`);
  }
}
