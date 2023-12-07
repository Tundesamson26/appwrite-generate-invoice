import { createPdf } from './pdf.js';

export default async ({ res, req, log, error }) => {
  const payload = req.body;
  
  log(payload);

  // const payload = {
  //   name: "tunde",
  //   address: "nigeria",
  //   email: "abc@mail.com",
  //   phone: "103839210",
  //   bankName: "wellsfargo",
  //   bankAccount: "0165691580",
  //   website: "www.appwrite.io",
  //   clientName: "hackmamba",
  //   clientAddress: "usa",
  //   invoiceNumber: "011",
  //   invoiceDate: "01/12/23",
  //   dueDate: "10/12/2023",
  //   notes: "additional note",
  //   list: [{
  //     description: "item one",
  //     quantity: "4",
  //     price: "7",
  //     amount: "40"
  //   }],
  // }

  // log(req.body)

  const pdfBuffer = await createPdf(payload);

  log('PDF created.');

  return res.send(pdfBuffer, 200, { 'Content-Type': 'application/pdf' });
};
