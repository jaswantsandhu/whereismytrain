function getOrdinalSuffix(value: number) {
  let suffix = "th";
  if (value % 100 < 11 || value % 100 > 13) {
    switch (value % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
    }
  }
  return `${value}${suffix}`;
}

export {
    getOrdinalSuffix
}