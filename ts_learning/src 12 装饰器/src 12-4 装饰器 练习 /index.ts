import { classDescriptor, propDescriptor, printObj } from './Descriptor';

@classDescriptor('文章')
class Article {
  @propDescriptor('标题22')
  title: string = 'umi4发布了';

  @propDescriptor('内容')
  content: string = '重磅更新';

  @propDescriptor('日期')
  date: Date = new Date();

  @propDescriptor('静态测试')
  static tt: string = 'yy';

  @propDescriptor('打招呼')
  sayHello() {}
  @propDescriptor('获取实例')
  static getInstance() {}
}

const ar = new Article();

printObj(ar);
