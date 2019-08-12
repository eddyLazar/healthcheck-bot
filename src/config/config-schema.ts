import Joi from '@hapi/joi';

export default Joi.object()
  .keys({
    BOT_TOKEN: Joi.string().required(),
    PORT: Joi.string(),
    TIMEOUT: Joi.string(),
    URLS: Joi.string().required(),
    TELEGRAM_CHANNEL: Joi.string().required()
  })
  .unknown(true);
