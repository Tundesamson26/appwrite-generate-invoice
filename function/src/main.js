import { createPdf } from "./pdf.js";
import { Client, Databases, ID } from "node-appwrite";
import querystring from "node:querystring";

export default async ({ res, req, log, error }) => {
  // const pdfBuffer = await createPdf();

  if (req.method == "GET") {
    return res.send(pdfBuffer, 200, { "Content-Type": "application/pdf" });
  }

  if (req.method === "POST") {
    const payload = querystring.parse(req.body);

    const pdfBuffer = await createPdf(payload);

    log("PDF created.");

    return res.send("PDF created");
  }
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
};
