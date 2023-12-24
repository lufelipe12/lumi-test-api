import { join } from 'path';

import { getFileToBuffer } from './get-file-to-buffer.mock';

export const getFileMock = async () => {
  const { buffer, stream } = await getFileToBuffer(join(__dirname, 'bill.pdf'));

  const pdf = {
    bucket: 'string',
    key: 'string',
    acl: 'string',
    contentType: 'string',
    contentDisposition: null,
    storageClass: 'string',
    serverSideEncryption: null,
    metadata: null,
    location: 'string',
    etag: 'string',
    fieldname: 'pdf-fieldname',
    originalname: '1234567.pdf',
    encoding: 'Content-Transfer-Encoding',
    mimetype: 'type/pdf',
    size: 1000,
    stream,
    destination: 'uploads',
    filename: 'filename',
    path: 'file-path',
    buffer,
  };

  return pdf;
};
