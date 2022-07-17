import Express from 'express';
import { MovieService } from '../services/MovieServices';
import { ResponseHelper } from './ResponseHelper';

const router = Express.Router();

router.get('/:id', async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await MovieService.findById(movieId);
    ResponseHelper.sendData(movie, res);
  } catch (error) {
    ResponseHelper.sendData([], res);
  }
});

router.get('/', async (req, res) => {
  const result = await MovieService.find(req.query as any);
  ResponseHelper.sendPageData(result, res);
});

router.post('/', async (req, res) => {
  const result = await MovieService.add(req.body as any);
  if (Array.isArray(result)) {
    ResponseHelper.sendError(result, res);
  } else {
    ResponseHelper.sendData(result, res);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await MovieService.edit(req.params.id, req.body as any);
    if (result.length > 0) {
      ResponseHelper.sendError(result, res);
    } else {
      ResponseHelper.sendData(true, res);
    }
  } catch (error) {
    ResponseHelper.sendError('id错误', res);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await MovieService.delete(req.params.id);
    ResponseHelper.sendData(true, res);
  } catch (error) {
    ResponseHelper.sendError('id错误', res);
  }
});

export default router;
