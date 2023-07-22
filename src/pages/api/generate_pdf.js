import { PDFDocument } from 'pdf-lib'


export default async function handler(req, res) {
    const pdfDoc = await PDFDocument.create()
    pdfDoc.setTitle('Report')

    const page = await pdfDoc.addPage()
    await page.drawText('You can create PDFs!')
    const pdfBytes = await pdfDoc.save()
    res.setHeader('Content-Type', 'application/pdf')
    res.send(Buffer.from(pdfBytes))
}