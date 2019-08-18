import { MakeRequest } from 'app';
import Joi from '@hapi/joi';
import httpStatus from 'http-status';
import { Express } from 'express';

const paramsSchema = Joi.object()
  .keys({
    url: Joi.string()
      .uri()
      .required()
  })
  .unknown(true);

const RESPONSE_STATUS = {
  ok: 'ok',
  error: 'url is not responding'
};

export default (app: Express, makeRequest: MakeRequest) => {
  app.get('/health-check', (req, res) => {
    const { error } = Joi.validate(req.query, paramsSchema);

    if (error) {
      res.status(httpStatus.BAD_REQUEST).json({ error: error.message });
    }

    makeRequest(req.query.url)
      .then(() =>
        res.status(httpStatus.OK).json({ status: RESPONSE_STATUS.ok })
      )
      .catch(() =>
        res
          .status(httpStatus.BAD_REQUEST)
          .json({ status: RESPONSE_STATUS.error })
      );
  });

  return app;
};
