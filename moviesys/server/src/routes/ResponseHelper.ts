import { Response } from 'express';
import { ISearchResult } from '../entities/CommonTypes';

export class ResponseHelper {
  public static sendError(error: string | string[], res: Response) {
    let err: string = '';
    if (Array.isArray(error)) {
      err = error.join(';');
    } else {
      err = error;
    }
    res.send({
      err,
      data: null,
    });
  }

  public static sendData(data: any, res: Response) {
    res.send({
      err: '',
      data,
    });
  }

  public static sendPageData<T>(result: ISearchResult<T>, res: Response) {
    if (result.errors?.length > 0) {
      this.sendError(result.errors, res);
    } else {
      res.send({
        err: '',
        data: result.data,
        total: result.count,
      });
    }
  }
}
