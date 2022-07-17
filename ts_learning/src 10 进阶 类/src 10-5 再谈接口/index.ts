import { Animal, Dog, Lion, Monkey, Tigger } from './animals';
import { HasFireShow, hasWisdomShow } from './interfaces';

const animals: Animal[] = [
  new Lion('王富贵', 12),
  new Tigger('坤坤', 21),
  new Monkey('小六', 1),
  new Dog('旺财', 3),
  new Dog('狗剩', 5),
];

//1. 所有的动物打招呼
animals.forEach((a) => a.sayHello());

//2. 所有会火圈表演的动物完成火圈表演
animals.forEach((a) => {
  if (HasFireShow(a)) {
    a.singleFire();
    a.doubleFire();
  }
});

//3. 所有会智慧表演的动物完成智慧表演
animals.forEach((a) => {
  if (hasWisdomShow(a)) {
    a.calc();
    a.dance();
  }
});

class A {
  a1: string = '';
  a2: string = '';
  a3: string = '';
}

class B {
  b1: number = 0;
  b2: number = 0;
  b3: number = 0;
}

interface C extends A, B {}

const c: C = {
  a1: '',
  a2: '',
  a3: '',
  b1: 0,
  b2: 3,
  b3: 4,
};

type CT = A & B;
const ct: CT = {
  a1: '',
  a2: '',
  a3: '',
  b1: 0,
  b2: 3,
  b3: 4,
};
