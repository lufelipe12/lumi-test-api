import { BadRequestException } from '@nestjs/common';
import { CreateBillDto } from '../bills/dto/create-bill.dto';
import { monthMapper } from './month-mapper';

export const pdfTextToBill = async (
  pdfText: string,
): Promise<CreateBillDto> => {
  try {
    const regexClientNumber = /Nº DA INSTALAÇÃO\s+(\d+)/;
    const matchClientNumber = pdfText.match(regexClientNumber);
    const clientNumber = matchClientNumber ? matchClientNumber[1] : null;

    const regexMonthYear = /Data de emissão:\s+\d+\/(\d{2})\/(\d{4})/;
    const matchMonthYear = pdfText.match(regexMonthYear);
    const month = matchMonthYear ? matchMonthYear[1] : null;
    const year = matchMonthYear ? matchMonthYear[2] : null;

    const regexElectricEnergy =
      /Energia Elétrica.*?(\d+)\s+([\d,]+).*?([\d,]+)/s;
    const matchElectricEnergy = pdfText.match(regexElectricEnergy);
    const electricity = matchElectricEnergy ? matchElectricEnergy[1] : null;
    const electricityValue = matchElectricEnergy
      ? matchElectricEnergy[3]
      : null;

    const regexSCEEE = /Energia SCEE s\/ ICMS.*?(\d+)\s+([\d,]+).*?([\d,]+)/s;
    const matchSCEEE = pdfText.match(regexSCEEE);
    const sceee = matchSCEEE ? matchSCEEE[1] : null;
    const sceeeValue = matchSCEEE ? matchSCEEE[3] : null;

    const regexCompensatedEnergy =
      /Energia compensada GD I.*?(\d+)\s+([\d,]+).*?([\d,]+)/s;
    const matchCompensatedEnergy = pdfText.match(regexCompensatedEnergy);
    const compensatedEnergy = matchCompensatedEnergy
      ? matchCompensatedEnergy[1]
      : null;
    const compensatedEnergyValue = matchCompensatedEnergy
      ? matchCompensatedEnergy[3]
      : null;

    const regexContribution = /Contrib Ilum Publica Municipal.*?([\d,]+)/;
    const matchContribution = pdfText.match(regexContribution);
    const contribution = matchContribution ? matchContribution[1] : null;

    const regexTotal = /TOTAL\s+([\d,]+)/;
    const matchTotal = pdfText.match(regexTotal);
    const total = matchTotal ? matchTotal[1] : null;

    return {
      clientNumber,
      compensatedEnergy:
        compensatedEnergy[0] == '0'
          ? Number(`1${compensatedEnergy}`)
          : +compensatedEnergy,
      compensatedEnergyValue: Number(compensatedEnergyValue.replace(',', '.')),
      contribution: Number(contribution.replace(',', '.')),
      electricity: +electricity,
      electricityValue: Number(electricityValue.replace(',', '.')),
      month: monthMapper(month),
      sceee: +sceee,
      sceeeValue: Number(sceeeValue.replace(',', '.')),
      total: Number(total.replace(',', '.')),
      year: +year,
    };
  } catch (error) {
    throw new BadRequestException(
      'Cant read file. Check if it is an energy bill.',
    );
  }
};
