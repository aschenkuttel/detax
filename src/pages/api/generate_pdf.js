import { PDFDocument } from 'pdf-lib'
import {getAddress, formatUnits} from 'ethers'


export default async function handler(req, res) {
    const transactions = req.body.data['ethereumTransfers']['TokenTransfer']

    const pdfDoc = await PDFDocument.create()
    pdfDoc.setTitle('Report')

    const page = await pdfDoc.addPage()
    const { width, height } = page.getSize()

    page.drawText('Your Transactions', { x: width/2.75, y: height - 50, size: 15 })

    let line = 1

    for (const txData of transactions) {
        console.log(txData)

        const lineHeight = height - 75 - line * 20

        const tokenAddress = getAddress(txData['tokenAddress'])
        const token = req.body.tokens.find(token => token.address === tokenAddress)

        const date = new Date(txData['blockTimestamp']).toLocaleString()
        page.drawText(date, { x: 20, y: lineHeight, size: 10 })

        const action = req.body.address === txData['from']['addresses'][0] ? 'Sold' : 'Bought'
        page.drawText(action, { x: 240, y: lineHeight, size: 10 })

        const formattedAmount = formatUnits(txData['amount'], 6)
        page.drawText(formattedAmount, { x: width - 200, y: lineHeight, size: 10 })

        page.drawText(token['symbol'], { x: width - 50, y: lineHeight, size: 10 })

        line += 1
    }

    const pdfBytes = await pdfDoc.save()
    res.setHeader('Content-Type', 'application/pdf')
    res.send(Buffer.from(pdfBytes))
}