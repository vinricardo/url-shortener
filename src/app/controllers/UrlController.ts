import { Request, Response } from 'express';

import { UrlService } from '../services/UrlService';

var service = new UrlService();

export class UrlController {
  async generateUrl(req: Request, res: Response) {
    const { url, short } = req.body;
    let result = await service.create({ url, short });
    return res.json(result);
  }

  async redirectUrl(req: Request, res: Response) {
    const { short } = req.params;
    let result = await service.getOne(short);
    if (result.url) return res.redirect(result.url);
    else {
      return res.json(result);
    }
  }

  async showAll(req: Request, res: Response) {
    let result = await service.getAll();
    res.json(result);
  }
}
