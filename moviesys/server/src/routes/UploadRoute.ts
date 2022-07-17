import Express from 'express';

import multer from 'multer';
import path from 'path';
import { ResponseHelper } from './ResponseHelper';

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '../../public/upload'),
  filename(req, file, cb) {
    const time = new Date().getTime();
    const extname = path.extname(file.originalname);
    cb(null, time + extname);
  },
});

const allowExt = ['.jpg', '.jpeg', '.png', '.gif'];
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024,
  },
  fileFilter(req, file, callback) {
    const extname = path.extname(file.originalname);
    if (allowExt.includes(extname)) {
      callback(null, true);
    } else {
      callback(new Error('文件类型不正确'));
    }
  },
}).single('imgfile');

const router = Express.Router();

router.post('/', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      ResponseHelper.sendError(err.message, res);
    } else {
      ResponseHelper.sendData(`/upload/${req.file?.filename}`, res);
    }
  });
});

export default router;
