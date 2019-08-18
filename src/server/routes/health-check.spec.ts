import request from 'supertest';
import healthCheckRoute from './health-check';
import express from 'express';
import httpStatus from 'http-status';

const appFactory = (makeRequest = jest.fn()) => {
  const app = express();
  healthCheckRoute(app, makeRequest);
  return {
    app,
    makeRequest
  };
};

test('given no url should throw error', async () => {
  const { app } = appFactory();
  const response = await request(app).get('/health-check');

  expect(response.status).toBe(httpStatus.BAD_REQUEST);
});

test('given invalid url should throw error', async () => {
  const { app } = appFactory();
  const response = await request(app).get('/health-check?url=123');

  expect(response.status).toBe(httpStatus.BAD_REQUEST);
});

describe('given valid url', () => {
  describe('when url is working', () => {
    const { app, makeRequest } = appFactory(jest.fn().mockResolvedValue(true));
    const url = 'http://google.com';
    const response = request(app).get(`/health-check?url=${url}`);

    test('should return status OK', done => {
      response.then(response => {
        expect(response.status).toBe(httpStatus.OK);
        done();
      });
    });
    test('should send request to given url', done => {
      response.then(() => {
        expect(makeRequest).toHaveBeenCalledWith(url);
        done();
      });
    });
    test('should return json', done => {
      response.then(response => {
        const expected = { status: 'ok' };
        const actual = response.body;
        expect(actual).toEqual(expected);
        done();
      });
    });
  });
  describe('when url is NOT working', () => {
    const { app } = appFactory(jest.fn().mockRejectedValue(false));
    const response = request(app).get('/health-check?url=http://google.com');

    test('should return status BAD_REQUEST', done => {
      response.then(response => {
        expect(response.status).toBe(httpStatus.BAD_REQUEST);
        done();
      });
    });

    test('should return json with error text', done => {
      response.then(response => {
        const expected = { status: 'url is not responding' };
        const actual = response.body;
        expect(actual).toEqual(expected);
        done();
      });
    });
  });
});
