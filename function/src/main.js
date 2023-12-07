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

export default async ({ res, req, log, error, data }) => {
  const data = {
    name: "tunde",
    address: "nigeria",
    email: "abc@mail.com",
    phone: "103839210",
    bankName: "wellsfargo",
    bankAccount: "0165691580",
    website: "www.appwrite.io",
    clientName: "hackmamba",
    clientAddress: "usa",
    invoiceNumber: "011",
    invoiceDate: "01/12/23",
    dueDate: "10/12/2023",
    notes: "additional note",
    list: [{
      description: "item one",
      quantity: "4",
      price: "$7",
      amount: "$40"
    }],
  }

  // log(req.body)

  const pdfBuffer = await createPdf(data);

  log('PDF created.');
  

  return res.send(pdfBuffer, 200, { 'Content-Type': 'application/pdf' });
  // return res.send(req.body)
};
