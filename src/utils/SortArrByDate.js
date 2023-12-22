const StringToDate = (stringdate) => {
  const segments = stringdate.split(",");
  const dateSeg = segments[0].split("/");
  const hourSeg = segments[1].split(":");
  // El mes se resta 1 porque en JavaScript los meses van de 0 a 11
  return new Date(dateSeg[2], dateSeg[1] - 1, dateSeg[0], hourSeg[0], hourSeg[1]);
};

// Función de comparación para ordenar de más reciente a más antiguo
export const CompareDates = (a, b) => {
  const DateA = StringToDate(a.searchDate);
  const DateB = StringToDate(b.searchDate);
  if (DateA > DateB) {
    return -1;
  } else if (DateA < DateB) {
    return 1;
  } else {
    return 0;
  }
};
