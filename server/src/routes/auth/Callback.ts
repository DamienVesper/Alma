/* eslint-disable @typescript-eslint/no-explicit-any */

import { Router } from 'express';
import config from '../../../config/config';

import log from '../../utils/log';

const router = Router();

router.get(`/`, (req, res) => {
    if (req.headers.host === undefined) {
        res.status(400);
        return;
    }

    log(`magenta`, `User "${((req.user as any).username as string)}" logged in.`);

    res.redirect(req.headers.host.includes(`localhost`)
        ? `http://localhost:3000`
        : config.domain
    );
});

export default router;
