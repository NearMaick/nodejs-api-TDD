export function mockDate() {
  const yearNow = new Date().getFullYear();
  const monthNow = new Date().getMonth() + 1;
  const dayNow = new Date().getDate();
  // console.log(new Date(`${yearNow}-${monthNow}-${dayNow}`));

  const oneDayPast = new Date(`${yearNow}-${monthNow}-${dayNow - 2}`);
  const oneDayFuture = new Date(`${yearNow}-${monthNow}-${dayNow + 1}`);
  const twoDaysFuture = new Date(`${yearNow}-${monthNow}-${dayNow + 2}`);
  const threeDaysFuture = new Date(`${yearNow}-${monthNow}-${dayNow + 3}`);
  const fourDaysFuture = new Date(`${yearNow}-${monthNow}-${dayNow + 4}`);
  const fiveDaysFuture = new Date(`${yearNow}-${monthNow}-${dayNow + 5}`);

  return {
    oneDayPast,
    oneDayFuture,
    twoDaysFuture,
    threeDaysFuture,
    fourDaysFuture,
    fiveDaysFuture,
  };
}
