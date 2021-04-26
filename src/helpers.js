export const gradesString = str => {
  const array = str.split(';');
  return array.length === 1
    ? `${array[0]} класс`
    : `${array[0]}-${array[array.length - 1]} классы`;
};

export const searchString = (array, str) => array.filter(
  el => (el.genre + el.subject + el.grade).toLowerCase().includes(str.trim().toLowerCase())
);
