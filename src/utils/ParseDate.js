export const ParseDate = (date) => {
  //Ejemplo del formato original en el que viene la fecha: "2023-04-24T22:49:37Z"
  const fixdate = `${date}`;
  const newdate = fixdate.slice(0, 10);
  const dateArr = newdate.split("-");
  const orderedDateArr = dateArr.reverse();
  const orderedDate = orderedDateArr.join("-");
  return orderedDate;
};
