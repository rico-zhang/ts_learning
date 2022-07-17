import { decriptor, printObj2 } from './Descriptor';

@decriptor('文章2')
class Article {
  @decriptor('标题2')
  title: string = 'umi4发布了';

  @decriptor('内容2')
  content: string = '重磅更新';

  @decriptor('日期2')
  date: Date = new Date();

  @decriptor('静态测试2')
  static tt: string = 'yy';

  @decriptor('打招呼2')
  sayHello() {}

  @decriptor('获取实例2')
  static getInstance() {}
}

const ar = new Article();

printObj2(ar);
