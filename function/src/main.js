// import { createPdf } from './pdf.js';
// import { generateFakeOrder } from './faker.js';

// export default async ({ res, log }) => {
//   const fakeOrder = generateFakeOrder();
//   log(`Generated fake order: ${JSON.stringify(fakeOrder, null, 2)}`);

//   const pdfBuffer = await createPdf(fakeOrder);
//   log('PDF created.');

//   return res.send(pdfBuffer, 200, { 'Content-Type': 'application/pdf' });
// };

import { createPdf } from './pdf.js';
// import { Buffer } from 'node:buffer';

export default async ({ res, req, log }) => {

  const pdfBuffer = await createPdf(req.body);

  log('PDF created.');
    log(req.body)

  return res.send(pdfBuffer, 200, { 'Content-Type': 'application/pdf' });
  // return res.send(req.body)
};
