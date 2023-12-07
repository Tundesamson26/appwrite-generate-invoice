import { PDFDocument } from 'pdf-lib';
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
  const document = await PDFDocument.create();
  const page = document.addPage([595.28, 841.89]); // A4 size

  page.drawText('Sample Invoice', { x: 50, y: 750, size: 20 });
  page.drawText(new Date(invoiceDate).toLocaleDateString(), {
    x: 400,
    y: 750,
    size: 15,
  });

   page.drawText(`Hello, ${invoiceNumber}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

  page.drawText(`Hello, ${name}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

   page.drawText(`Hello, ${address}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

  page.drawText(`Order ID: ${email}`, {
    x: 50,
    y: 650,
    size: 10,
  });

   page.drawText(`Hello, ${phone}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

   page.drawText(`Hello, ${bankName}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

   page.drawText(`Hello, ${bankAccount}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

   page.drawText(`Hello, ${website}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

   page.drawText(`Hello, ${clientName}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

   page.drawText(`Hello, ${clientAddress}!`, {
    x: 50,
    y: 700,
    size: 30,
  });

  page.drawText(`Total: $${notes}`, { x: 50, y: 600, size: 15 });

  const orderList = list
    .map(
      ({ description, quantity, price, amount, }) =>
        `${quantity} x ${price} = $${amount}`
    )
    .join('\n');

  page.drawText(orderList, { x: 50, y: 550, size: 15 });

  const pdfBytes = await document.save();

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
