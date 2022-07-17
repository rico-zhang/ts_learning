@descriptionCls('用户')
class User {
  @descriptionField('姓名')
  name: string = 'rico';
  @descriptionField('所有成员')
  static users: User[] = [];

  @descriptionMethod('打招呼')
  sayHello() {}

  @descriptionMethod('获取实例')
  static getInstance() {}
}

function descriptionCls(desc: string) {
  return function (target: new () => object) {};
}

function descriptionField(desc: string) {
  return function (target: any, fieldName: string) {};
}

function descriptionMethod(desc: string) {
  return function (
    target: any,
    fieldName: string,
    descriptor: PropertyDescriptor
  ) {};
}

// function test(decorators, target, key, desc) {
//   var c = arguments.length;
//   var r, d;
//   if (c < 3) {
//     r = target;
//   } else {
//     if (desc === null) {
//       desc = Object.getOwnPropertyDescriptor(target, key);
//       r = desc;
//     } else {
//       r = desc;
//     }
//   }
//   if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
//     r = Reflect.decorate(decorators, target, key, desc);
//   else {
//     for (var i = decorators.length - 1; i >= 0; i--) {
//       d = decorators[i];
//       if (d) {
//         var temp;
//         if (c < 3) {
//           temp = d(r);
//         } else {
//           if (c > 3) {
//             temp = d(target, key, r);
//           } else {
//             temp = d(target, key);
//           }
//         }
//         r = temp || r;
//       }
//     }
//   }
//   c > 3 && r && Object.defineProperties(target, key, r);
//   return r;
// }
