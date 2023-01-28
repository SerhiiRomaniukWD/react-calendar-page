export const dateNormalString = (date: Date) => {
  const dateResult = date.toISOString().split('T')[0]
    .split('-').map((elem, index) => {
      if (index === 2 && +elem < 10) {
        return `0${elem + 1}`;
      } else if (index === 2) {
        return +elem + 1;
      }

      return elem;
    });

  return dateResult.join('-');
};

export const getDate = () => {
  const date = new Date();
  const dateToString = dateNormalString(date);
  const monthToString = date.toLocaleString('default', { month: 'long' });

  return {
    date,
    dateToString,
    monthToString,
  };
};

export const getDayAbbreviation = (date: Date) => {
  return date.toLocaleString('default', { weekday: 'long' }).slice(0, 2);
};

export const getFullDaysTemplate = (date: Date) => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const startDayInMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysArr = [];  

  let startDate = new Date(currentYear, currentMonth, -startDayInMonth + 1);

  for (let j = 0; j < 35; j++) {
    daysArr.push(startDate);
    startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);
  }

  return daysArr;
};

export const getMonthDaysTemplate = (date: Date) => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const daysCount = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysArr = [];  

  let startDate = new Date(currentYear, currentMonth, 1);

  for (let j = 0; j < daysCount; j++) {
    daysArr.push(dateNormalString(startDate));
    startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);
  }

  return daysArr;
};
