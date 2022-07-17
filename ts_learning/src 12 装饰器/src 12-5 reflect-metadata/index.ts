import {
  classDescriptor,
  propDescriptor,
  printObj,
  decriptor,
  printObj2,
} from './Descriptor';

@classDescriptor('文章')
@decriptor('文章2')
class Article {
  @propDescriptor('标题')
  @decriptor('标题2')
  title: string = 'umi4发布了';

  @propDescriptor('内容')
  @decriptor('内容2')
  content: string = '重磅更新';

  @propDescriptor('日期')
  @decriptor('日期2')
  date: Date = new Date();

  @propDescriptor('静态测试')
  @decriptor('静态测试2')
  static tt: string = 'yy';

  @propDescriptor('打招呼')
  @decriptor('打招呼2')
  sayHello() {}

  @propDescriptor('获取实例')
  @decriptor('获取实例2')
  static getInstance() {}
}

const ar = new Article();

printObj(ar);
printObj2(ar);
