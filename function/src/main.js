import { createPdf } from "./pdf.js";

export default async ({ res, req, log, error }) => {
  if (req.method === "POST") {
    try {
      const payload = (req.body.data);

      const pdfBuffer = await createPdf(payload);

      const pdfBase64 = pdfBuffer.toString('base64');

      return res.send(pdfBase64, 200, { "Content-Type": "application/pdf" });
    } catch (err) {
      log('Error processing the request: ' + err.message);
      return res.send('Internal Server Error ' + err.message);
    }
  } else {
    log(error)
    return res.send('Bad Request');
  }

};
