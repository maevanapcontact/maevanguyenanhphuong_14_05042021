export const generateID = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const getNbOfDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getCurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};
