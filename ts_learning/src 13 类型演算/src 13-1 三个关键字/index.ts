// - in
// 该关键字往往和keyof联用，限制某个索引类型的取值范围。

interface Article {
  title: string;
  publishDate: Date;
}

type StringArticle = {
  [p in keyof Article]: string;
};

type StringProp<T> = {
  [p in keyof T]: string;
};

type ReadonlyProp<T> = {
  readonly [p in keyof T]: T[p];
};
type PartialProp<T> = {
  [p in keyof T]?: T[p];
};

const a: StringArticle = {
  title: '',
  publishDate: '',
};

const a1: StringProp<Article> = {
  title: '',
  publishDate: '',
};

const a2: ReadonlyProp<Article> = {
  title: '',
  publishDate: new Date(),
};
// a2.title = 'ee' //ts报错 无法分配到 "title" ，因为它是只读属性。

const a3: PartialProp<Article> = {
  //可以不写属性 都是可选的
};
