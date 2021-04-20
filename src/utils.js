export const generateID = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const getNbOfDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};
