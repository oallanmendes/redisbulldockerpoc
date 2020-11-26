import 'dotenv/config';

import Redis from 'ioredis';
import { Worker } from 'bullmq';

const worker = new Worker(
  'sendHello',
  async job => {
    // setTimeout(() => {
    console.log(`${job.data.message}`);
    // }, 1500);
  },
  {
    connection: new Redis(process.env.REDIS_URL),
    // limiter: {
    //   max: 1,
    //   duration: 1500,
    // },
  },
);

worker.on('completed', job => console.log(`${job.id} has completed`));
