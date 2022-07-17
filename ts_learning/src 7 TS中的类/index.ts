class User {
  readonly id: number;
  gender: '男' | '女' = '男';
  pid?: string;
  private _publishNumber: number = 3;
  private _curNumber: number = 0;
  constructor(public name: string, private _age: number) {
    this.id = Math.random();
  }

  set age(value: number) {
    if (value < 0) {
      this._age = 0;
    } else if (value > 200) {
      this._age = 200;
    } else {
      this._age = value;
    }
  }

  get age() {
    return Math.floor(this._age);
  }
  publish(title: string) {
    if (this._curNumber < this._publishNumber) {
      console.log('发布了一篇文章' + title);
      this._curNumber++;
    } else {
      console.log('发布已达上限');
    }
  }
}

let user = new User('rico', 18);
console.log(user);
user.age = 20.8;
console.log(user.age);

for (let i = 0; i < 5; i++) {
  user.publish('文章' + i);
}
