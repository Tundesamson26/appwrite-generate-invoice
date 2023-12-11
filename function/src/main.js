import { createPdf } from "./pdf.js";
import querystring from "node:querystring";

export default async ({ res, req, log, error }) => {
  if (req.method === "POST") {
    try {
      const payload = querystring.parse(req.body);

      log(JSON.stringify(payload));

      const pdfBuffer = await createPdf(payload);

      const pdfBase64 = pdfBuffer.toString('base64');

      return res.send(pdfBase64, 200, { "Content-Type": "application/pdf" });
    } catch (err) {
      error('Error processing the request:', err.message);
      return res.send('Internal Server Error ' + err.message);
    }
  } else {
    log(error)
    return res.send('Bad Request');
  }

};


 // const client = new Client();
      // client
      //   .setEndpoint('https://cloud.appwrite.io/v1')
      //   .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      //   .setKey(process.env.APPWRITE_API_KEY);

      // log("PDF created.");

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