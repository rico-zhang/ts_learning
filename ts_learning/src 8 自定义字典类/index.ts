import { Dictionary } from './dictionary';

const dic = new Dictionary<string, number>();

dic.set('a', 1);
dic.set('b', 2);
dic.set('a', 11);
dic.set('c', 33);

dic.forEach((k, v) => {
  console.log(`${k}:${v}`);
});
console.log('当前键值对的数量: ' + dic.size);
console.log('是否含有键b: ' + dic.has('b'));

console.log('删除键b');
dic.remove('b');

dic.forEach((k, v) => {
  console.log(`${k}:${v}`);
});
console.log('当前键值对的数量:' + dic.size);
console.log('是否含有键b: ' + dic.has('b'));

console.log('清除所有');
dic.clear();

dic.forEach((k, v) => {
  console.log(`${k}:${v}`);
});
console.log('当前键值对的数量:' + dic.size);
