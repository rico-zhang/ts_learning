var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
let User = class User {
  constructor() {
    this.name = 'rico';
  }
  sayHello() {}
  static getInstance() {}
};
User.users = [];
__decorate([descriptionField('姓名')], User.prototype, 'name', void 0);
__decorate([descriptionMethod('打招呼')], User.prototype, 'sayHello', null);
__decorate([descriptionField('所有成员')], User, 'users', void 0);
__decorate([descriptionMethod('获取实例')], User, 'getInstance', null);
User = __decorate([descriptionCls('用户')], User);
function descriptionCls(desc) {
  return function (target) {};
}
function descriptionField(desc) {
  return function (target, fieldName) {};
}
function descriptionMethod(desc) {
  return function (target, fieldName, desc) {};
}
