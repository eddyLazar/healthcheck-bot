import request from 'supertest';
import resourcesRoute from './resources';
import express from 'express';
import httpStatus from 'http-status';

const urls = ['http://google.com', 'http://microsoft.com'];

const appFactory = () => {
  const app = express();
  resourcesRoute(app, urls);

  return app;
};

describe('GET /resources', () => {
  const app = appFactory();
  const response = request(app).get('/resources');

  test('should return status 200', async () => {
    return response.expect(httpStatus.OK);
  });

  test('should return given urls', async () => {
    return response.expect({ resources: urls });
  });
});
