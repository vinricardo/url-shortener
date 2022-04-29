import { Router } from 'express';

import { UrlController } from './app/controllers/UrlController';

var router = Router();

router.post("/", new UrlController().generateUrl);
router.get("/:short", new UrlController().redirectUrl);
router.get("/", new UrlController().showAll);

export { router };
