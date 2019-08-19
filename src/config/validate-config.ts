import Joi from '@hapi/joi';

const configSchema = Joi.object()
  .keys({
    BOT_TOKEN: Joi.string().required(),
    PORT: Joi.string().allow(''),
    TIMEOUT: Joi.string().allow(''),
    URLS: Joi.string().required(),
    TELEGRAM_CHANNEL: Joi.string().required()
  })
  .unknown(true);

export default (o: {}) => Joi.assert(o, configSchema);
