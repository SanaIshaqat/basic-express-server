'use strict';
const { server } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Validator Test', () => {

  // Check if /person endpoint works fine 

  test('/person 200 if the name is in the query string', async () => {
    const response = await mockRequest.get('/person?name=sana');
    expect(response.status).toBe(200);
  });
  

  // Check if validation error handling is working

  test('/person 500 if no name in the query string', async () => {
    const response = await mockRequest.get('/person?name');
    expect(response.status).toBe(500);
  });

});