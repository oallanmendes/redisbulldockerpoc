import 'dotenv/config';

import testQueue from './lib/testQueue';

let i = 0;

setInterval(() => {
  testQueue.add('sendHello', {
    message: `Hello world`,
  });
  console.log(`Job scheduled -> Agendamento ${i}`);
  i += 1;
}, 10000);
