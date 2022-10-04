export function mockDate() {
  const yearNow = new Date().getFullYear();
  const monthNow = new Date().getMonth() + 1;
  const dayNow = new Date().getDate();
  // console.log(new Date(`${yearNow}-${monthNow}-${dayNow}`));

  const twoDaysFuture = new Date(`${yearNow}-${monthNow}-${dayNow + 2}`);

  const oneDayFuture = new Date(`${yearNow}-${monthNow}-${dayNow + 1}`);

  const oneDayPast = new Date(`${yearNow}-${monthNow}-${dayNow - 2}`);

  return {
    twoDaysFuture,
    oneDayFuture,
    oneDayPast,
  };
}
