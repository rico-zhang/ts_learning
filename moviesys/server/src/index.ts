import 'reflect-metadata';
import Express from 'express';
import MovieRouter from './routes/MovieRoute';
import UploadRouter from './routes/UploadRoute';
import history from 'connect-history-api-fallback';

const app = Express();
app.use(history());
app.use('/', Express.static('public/build'));
app.use('/upload', Express.static('public/upload'));

app.use(Express.json()); // 配置中间件 用于解析请求消息体的json格式

app.use('/api/movie', MovieRouter);

// 文件上传
// 通常情况下,服务器会提供一个统一的api接口,用于处理上传的文件
app.use('/api/upload', UploadRouter);

app.listen(5002);
