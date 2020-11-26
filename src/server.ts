import 'dotenv/config';
import express from 'express';
import { router, setQueues } from 'bull-board';

import './workers/testQueueWorker';

import testQueue from './lib/testQueue';

setQueues([testQueue]);

const app = express();

app.listen(3000, () => {
  console.log('Server listen: 3000');
});

app.use('/admin/queues', router);

let i = 0;

setInterval(() => {
  testQueue.add('sendHello', {
    message: `Hello world`,
  });
  console.log(`Job scheduled -> Agendamento ${i}`);
  i += 1;
}, 1);
