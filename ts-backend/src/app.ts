import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import {  DataSource } from 'typeorm';
import { Log } from './entity/Log';
import config from './ormconfig';

export const app = express();

app.use(bodyParser.json());

// Define the DataSource with a specific type for PostgreSQL
export let dataSource = new DataSource(config);
// Function to connect to the database and configure routes
export const init = async () => {
  await dataSource.initialize();
  app.post('/log', async (req, res) => {
    const logRepository = dataSource.getRepository(Log);
    const log = logRepository.create(req.body);
    await logRepository.save(log);
    res.status(201).json(log);
  });
  

  app.get('/log', async (req, res) => {
    const logRepository = dataSource.getRepository(Log);
    const logs = await logRepository.find();
    res.json(logs);
  });
};

export const close = async () => {
    await dataSource.destroy();
};

