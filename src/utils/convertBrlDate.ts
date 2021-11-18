export const ConvertDate = (dateStr: string) => {
  const dateArray = dateStr.split('-');
  console.log('array', dateArray);
  return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
};
