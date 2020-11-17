import 'dotenv/config';
import testQueue from './lib/testQueue';

setInterval(() => {
  testQueue.add('sendHello', {
    message: `Hello world`,
  });
  console.log('Job scheduled');
}, 10);
