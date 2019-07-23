import express from "express";
import { GenerateRequestBody } from "./models";

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Thanks for calling Azure CodeName Generator API. Detailed documentation is @ https://github.com/polatengin/ankara');
});

app.post('/generate', (request, response) => {
  response.removeHeader('X-Powered-By');

  const body: GenerateRequestBody = request.body;

  response.json(true);
});

app.listen(5000);
