export const gradesString = str => {
  const array = str.split(';');
  return array.length === 1
  ? `${array[0]} класс`
  : `${array[0]}-${array[array.length - 1]} классы`;
};
