export function getFutureDate(date: string): Date {
  const parsedDate = new Date(date);

  parsedDate.setFullYear(parsedDate.getFullYear() + 1);

  return parsedDate;
}
