export const ConvertDate = (dateStr: string) => {
  const dateArray = dateStr.split('-'); // ex input "2010-01-18"
  console.log('array', dateArray);
  return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`; // ex out: "18/01/10"
};
