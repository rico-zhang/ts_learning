import 'reflect-metadata';

const key = Symbol('descriptor');

export function decriptor(description: string) {
  return Reflect.metadata(key, description);
}

export function printObj2(obj: any) {
  const Cls = Object.getPrototypeOf(obj).constructor;
  if (Reflect.hasMetadata(key, Cls)) {
    console.log(Reflect.getMetadata(key, Cls));
  } else {
    console.log(Cls.name);
  }

  for (const k in obj) {
    if (Reflect.hasMetadata(key, obj, k)) {
      console.log(`\t${Reflect.getMetadata(key, obj, k)}:${obj[k]}`);
    } else {
      console.log(`\t${k}:${obj[k]}`);
    }
  }
  for (const k in Cls) {
    if (Reflect.hasMetadata(key, Cls, k)) {
      console.log(`\t${Reflect.getMetadata(key, Cls, k)}:${Cls[k]}`);
    } else {
      console.log(`\t${k}:${Cls[k]}`);
    }
  }
}
