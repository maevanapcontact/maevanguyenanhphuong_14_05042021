export const generateID = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const getNbOfDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getCurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

export const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const getMinYear = () => {
  return getCurrentYear() - 100;
};

export const getMaxYear = () => {
  return getCurrentYear() + 50;
};

export const getRangeOfYears = () => {
  const years = [];
  for (let i = getMinYear(); i <= getMaxYear(); i++) years.push(i);
  return years;
};

export const getFormattedDate = (year, month, day) => {
  let displayedMonth = month.toString().length < 2 ? `0${month}` : month;
  let displayedDay = day.toString().length < 2 ? `0${day}` : day;

  return `${year}-${displayedMonth}-${displayedDay}`;
};
