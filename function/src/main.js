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
import { generateFakeOrder } from './faker.js';
import { Buffer } from 'node:buffer';

export default async ({ res, req, log, data }) => {
  log(req.body)
  return res.send(req.body)
  // const {
  //   name,
  //   address,
  //   email,
  //   phone,
  //   bankName,
  //   bankAccount,
  //   website,
  //   clientName,
  //   clientAddress,
  //   invoiceNumber,
  //   invoiceDate,
  //   dueDate,
  //   notes,
  //   list,
  // } = data;

  // const pdfBuffer = await createPdf({
  //   name,
  //   address,
  //   email,
  //   phone,
  //   bankName,
  //   bankAccount,
  //   website,
  //   clientName,
  //   clientAddress,
  //   invoiceNumber,
  //   invoiceDate,
  //   dueDate,
  //   notes,
  //   list,
  // });

  // log('PDF created.');

  // return res.send(pdfBuffer, 200, { 'Content-Type': 'application/pdf' });
};
