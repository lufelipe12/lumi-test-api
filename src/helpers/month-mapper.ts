function monthMapper(monthNumber: string) {
  let month;

  switch (monthNumber) {
    case '01':
      month = 'Janeiro';
      break;
    case '02':
      month = 'Fevereiro';
      break;
    case '03':
      month = 'Março';
      break;
    case '04':
      month = 'Abril';
      break;
    case '05':
      month = 'Maio';
      break;
    case '06':
      month = 'Junho';
      break;
    case '07':
      month = 'Julho';
      break;
    case '08':
      month = 'Agosto';
      break;
    case '09':
      month = 'Setembro';
      break;
    case '10':
      month = 'Outubro';
      break;
    case '11':
      month = 'Novembro';
      break;
    case '12':
      month = 'Dezembro';
      break;
    default:
      month = 'Mês inválido';
  }

  return month;
}

export { monthMapper };
