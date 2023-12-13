import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { Buffer } from 'node:buffer';

export async function createPdf({
  name,
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
  list,
}) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const { width, height } = page.getSize();
  const fontSize = 12;
  const padding = 20; // Padding for text
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  page.drawText('Invoice', {
    x: 50,
    y: height - fontSize,
    size: fontSize + 20,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  page.drawText(`Invoice Date: ${new Date(invoiceDate).toLocaleDateString()}`, {
    x: 50,
    y: height - 2 * fontSize,
    size: fontSize,
  });

  page.drawText(`Due Date: ${new Date(dueDate).toLocaleDateString()}`, {
    x: 50,
    y: height - 3 * fontSize,
    size: fontSize,
  });

  page.drawText(`Invoice Number: ${invoiceNumber}`, {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
  });

  page.drawText(`Bill To: ${name}`, {
    x: 50,
    y: height - 6 * fontSize,
    size: fontSize,
  });

  page.drawText(`Address: ${address}`, {
    x: 50,
    y: height - 7 * fontSize,
    size: fontSize,
  });

  page.drawText(`Email: ${email}`, {
    x: 50,
    y: height - 8 * fontSize,
    size: fontSize,
  });

  page.drawText(`Phone: ${phone}`, {
    x: 50,
    y: height - 9 * fontSize,
    size: fontSize,
  });

  page.drawText(`Bank Name: ${bankName}`, {
    x: 50,
    y: height - 11 * fontSize,
    size: fontSize,
  });

  page.drawText(`Bank Account: ${bankAccount}`, {
    x: 50,
    y: height - 12 * fontSize,
    size: fontSize,
  });

  page.drawText(`Website: ${website}`, {
    x: 50,
    y: height - 13 * fontSize,
    size: fontSize,
  });

  page.drawText(`Client Name: ${clientName}`, {
    x: 50,
    y: height - 15 * fontSize,
    size: fontSize,
  });

  page.drawText(`Client Address: ${clientAddress}`, {
    x: 50,
    y: height - 16 * fontSize,
    size: fontSize,
  });

  // Draw Line Items
  const startY = height - 18 * fontSize;
  const lineItemSpacing = 1.5 * fontSize;
  page.drawText('Description     Quantity     Price     Amount', {
    x: 50,
    y: startY,
    size: fontSize,
  });

  list.forEach(({ description, quantity, price, amount }, index) => {
    const y = startY - (index + 1) * lineItemSpacing;
    const lineItemText = `${description.padEnd(25)} ${quantity.toString().padEnd(10)} $${price.toString().padEnd(10)} $${amount.toString()}`;
    page.drawText(lineItemText, { x: padding, y, size: fontSize });
  });

  page.drawText(`Total: $${notes}`, {
    x: 50,
    y: startY - (list.length + 3) * lineItemSpacing,
    size: fontSize + 2,
  });

  const pdfBytes = await pdfDoc.save();

  return Buffer.from(pdfBytes);
}
