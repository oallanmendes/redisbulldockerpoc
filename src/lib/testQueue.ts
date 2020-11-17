import { Queue } from 'bullmq';
import Redis from 'ioredis';

const testQueue = new Queue('sendHello', {
  connection: new Redis(process.env.REDIS_URL),
});

export default testQueue;
