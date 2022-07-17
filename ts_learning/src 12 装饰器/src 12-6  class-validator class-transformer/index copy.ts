import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';

class Post {
  @Length(10, 20, {
    message: (args) => {
      console.log(args);
      return 'title长度';
    },
  })
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;
}

const post = new Post();
post.title = 'Hello'; // should not pass
post.text = 'this is a great post about hell world'; // should not pass
post.rating = 11; // should not pass
post.email = 'google.com'; // should not pass
post.site = 'googlecom'; // should not pass

// validate(post, {
//   validationError: {
//     target: false,
//   },
// }).then((errors) => {
//   //errors 是一个验证错误信息的数组
//   if (errors.length > 0) {
//     console.log('验证失败: ', errors);
//   } else {
//     console.log('验证通过');
//   }
// });

// validateOrReject(post).catch((errors) => {
//   console.log('Promise reject 错误信息:', errors);
// });
