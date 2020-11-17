import 'dotenv/config';

import Redis from 'ioredis';
import { Worker } from 'bullmq';

const worker = new Worker(
  'sendHello',
  async job => {
    console.log(`${job.data.message}`);
  },
  { connection: new Redis(process.env.REDIS_URL) },
);

worker.on('completed', job => console.log(`${job.id} has completed`));
