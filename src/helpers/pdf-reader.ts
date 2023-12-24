import PdfParse from 'pdf-parse';

export const pdfScrapper = async (file: Buffer) => {
  const textOnPdf = (await PdfParse(file)).text;

  return textOnPdf;
};
