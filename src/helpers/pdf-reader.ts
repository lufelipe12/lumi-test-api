import PdfParse from 'pdf-parse';

export const pdfScrapper = async (file: Express.Multer.File) => {
  const textOnPdf = (await PdfParse(file.buffer)).text;

  return textOnPdf;
};
