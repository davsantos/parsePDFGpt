import * as fs from 'fs';
import * as path from 'path';
import pdfParse from 'pdf-parse';

const filePath = path.resolve(__dirname, '../resources/sample.pdf');
const outputFilePath = path.resolve(__dirname, '../output.txt');

const dataBuffer: Buffer = fs.readFileSync(filePath);


pdfParse(dataBuffer).then((data: { text: string }) => {
    fs.writeFileSync(outputFilePath, data.text);
    console.log(`Parsed text written to ${outputFilePath}`);
}).catch((error: any) => {
    console.error("Error parsing PDF:", error);
});
