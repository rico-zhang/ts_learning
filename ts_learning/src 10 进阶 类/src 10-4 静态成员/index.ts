class User {
  static users: User[] = [];
  constructor(
    public loginId: string,
    public loginPwd: string,
    public name: string,
    public age: number
  ) {
    //需要将新建的用户放入到数组中
    User.users.push(this);
  }

  sayHello() {
    console.log(
      `大家好，我叫${this.name},今年${this.age}岁,我的账号是${this.loginId}`
    );
  }
  static login(loginId: string, loginPwd: string): User | undefined {
    return this.users.find(
      (u) => u.loginId === loginId && u.loginPwd === loginPwd
    );
  }
}

new User('u1', '123', '张三', 11);
new User('u2', '123', '李四', 18);
new User('u3', '123', '王五', 15);

const result = User.login('u3', '123');
if (result) {
  result.sayHello();
} else {
  console.log('登录失败');
}
//单例模式 懒汉模式
class Board {
  private constructor() {}

  private static _board;

  static createBoard(): Board {
    if (!this._board) {
      this._board = new Board();
    }
    return this._board;
  }
}

//返利模式 饿汉模式
class BoardEx {
  private constructor() {}

  private static _board = new BoardEx();

  static createBoard(): BoardEx {
    return this._board;
  }
}

const b1: BoardEx = BoardEx.createBoard();
const b2: BoardEx = BoardEx.createBoard();
console.log(b1 === b2);
