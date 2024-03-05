export function generateYearArray(numYears) {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = 0; i < numYears; i++) {
    years.push(currentYear + i);
  }

  return years;
}
