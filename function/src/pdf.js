import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { Buffer } from 'node:buffer';

export async function createPdf({ name,
    address,
    email,
    phone,
    bankName,
    bankAccount,
    website,
    clientName,
    clientAddress,
    invoiceNumber,
    invoiceDate,
    dueDate,
    notes,
    list, }) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const { width, height } = page.getSize()
  const fontSize = 30
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

  page.drawText(`Hello, ${name}!`, {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  // page.drawText('Invoice', { x: 50, y: 750, size: 20 });
  page.drawText(new Date(invoiceDate).toLocaleDateString(), {
    x: 60,
    y: 500,
    size: 25,
  });

   page.drawText(`Number, ${invoiceNumber}!`, {
    x: 10,
    y: 300,
    size: 10,
  });

   page.drawText(`Address, ${address}!`, {
    x: 50,
    y: 350,
    size: 15,
  });

  page.drawText(`Email: ${email}`, {
     x: 30,
    y: 350,
    size: 20,
  });

   page.drawText(`Phone:, ${phone}!`, {
    x: 30,
    y: 380,
    size: 30,
  });

   page.drawText(`Bank name:, ${bankName}!`, {
    x: 20,
    y: 750,
    size: 30,
  });

   page.drawText(`Bank Account:, ${bankAccount}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

   page.drawText(`Website:, ${website}!`, {
    x: 16,
    y: 100,
    size: 5,
  });

   page.drawText(`Client name:, ${clientName}!`, {
    x: 25,
    y: 550,
    size: 30,
  });

   page.drawText(`Client address:, ${clientAddress}!`, {
    x: 50,
    y: 500,
    size: 15,
  });

  page.drawText(`Total: $${notes}`, { x: 50, y: 600, size: 15 });

  const orderList = list
    .map(
      ({ description, quantity, price, amount, }) =>
        `${quantity} x ${price} = $${amount}`
    )
    .join('\n');

  page.drawText(orderList, { x: 50, y: 550, size: 15 });

  const pdfBytes = await pdfDoc.save();

  return Buffer.from(pdfBytes);
}



// import { PDFDocument } from 'pdf-lib';
// import { Buffer } from 'node:buffer';

// export async function createPdf({
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
// }) {
//   const document = await PDFDocument.create();
//   const page = document.addPage([595.28, 841.89]); // A4 size

//   page.drawText('Sample Invoice', { x: 50, y: 750, size: 20 });
//   page.drawText(new Date(invoiceDate).toLocaleDateString(), {
//     x: 400,
//     y: 750,
//     size: 15,
//   });

//   page.drawText(`Hello, ${clientName}!`, {
//     x: 50,
//     y: 700,
//     size: 30,
//   });

//   page.drawText(`Invoice Number: ${invoiceNumber}`, {
//     x: 50,
//     y: 650,
//     size: 15,
//   });

//   // Display client details
//   page.drawText(`Client Name: ${name}`, { x: 50, y: 620, size: 15 });
//   page.drawText(`Client Address: ${address}`, { x: 50, y: 600, size: 15 });
//   page.drawText(`Client Email: ${email}`, { x: 50, y: 580, size: 15 });
//   page.drawText(`Client Phone: ${phone}`, { x: 50, y: 560, size: 15 });

//   // Display items
//   let yOffset = 530; // Initial y-coordinate for items
//   for (const item of list) {
//     const itemText = `${item.description} x ${item.quantity} = $${item.amount}`;
//     page.drawText(itemText, { x: 50, y: yOffset, size: 15 });
//     yOffset -= 20; // Adjust the y-coordinate for the next item
//   }

//   // Display total
//   page.drawText(`Total: $${list.reduce((acc, item) => acc + item.amount, 0)}`, {
//     x: 50,
//     y: yOffset - 20,
//     size: 15,
//   });

//   // Display additional notes
//   page.drawText('Additional Notes:', { x: 50, y: yOffset - 50, size: 15 });
//   page.drawText(notes, { x: 50, y: yOffset - 70, size: 15 });

//   const pdfBytes = await document.save();

//   return Buffer.from(pdfBytes);
// }
