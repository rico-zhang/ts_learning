import {
  plainToInstance,
  instanceToPlain,
  serialize,
  deserialize,
} from 'class-transformer';
class User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;

  getName() {
    return this.firstName + ' ' + this.lastName;
  }

  isAudlt() {
    return this.age > 36 && this.age < 60;
  }
}

export function getUsers(): Promise<any> {
  const users = [
    {
      id: 1,
      firstName: 'Johny',
      lastName: 'Cage',
      age: 27,
    },
    {
      id: 2,
      firstName: 'Ismoil',
      lastName: 'Somoni',
      age: 50,
    },
    {
      id: 3,
      firstName: 'Luke',
      lastName: 'Dacascos',
      age: 12,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
}

getUsers().then((res: User[]) => {
  const users = plainToInstance(User, res);
  console.log(users[0].getName());
});
const user = new User();
user.id = 666;
user.age = 18;
console.log(instanceToPlain(user));
console.log(serialize(user));
console.log(deserialize(User, serialize(user)));
