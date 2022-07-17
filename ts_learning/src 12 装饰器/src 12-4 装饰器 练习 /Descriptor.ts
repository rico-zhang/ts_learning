export function classDescriptor(description: string) {
  return function (target: Function) {
    //保存到该类的原型中
    target.prototype.$classDescription = description;
  };
}

export function propDescriptor(description: string) {
  return function (target: any, propName: string, desc?: PropertyDescriptor) {
    //把所有的属性信息保存到该类的原型中
    if (!target.$propDescriptions) {
      target.$propDescriptions = [];
    }
    target.$propDescriptions.push({
      propName,
      description,
    });
    if (desc) {
      //如果是方法的话 要可可枚举改为true
      desc.enumerable = true;
    }
  };
}

export function printObj(obj: any) {
  //输出类的名字
  if (obj.$classDescription) {
    console.log(obj.$classDescription);
  } else {
    console.log(Object.getPrototypeOf(obj).constructor.name);
  }
  if (!obj.$propDescriptions) {
    obj.$propDescriptions = [];
  }

  //输出所有实例属性描述和属性值
  for (const key in obj) {
    // obj.hasOwnProperty(key) &&
    if (key !== '$propDescriptions' && key !== '$classDescription') {
      const prop = obj.$propDescriptions.find((p: any) => p.propName === key);
      if (prop) {
        console.log(`\t${prop.description}:${obj[key]}`);
      } else {
        console.log(`\t${key}:${obj[key]}`);
      }
    }
  }
  //静态属性
  let Cls = Object.getPrototypeOf(obj).constructor;
  if (!Cls.$propDescriptions) {
    Cls.$propDescriptions = [];
  }
  for (const key in Cls) {
    // Cls.hasOwnProperty(key) &&
    if (key !== '$propDescriptions') {
      const prop = Cls.$propDescriptions.find((p: any) => p.propName === key);
      if (prop) {
        console.log(`\t${prop.description}:${Cls[key]}`);
      } else {
        console.log(`\t${key}:${Cls[key]}`);
      }
    }
  }
}
