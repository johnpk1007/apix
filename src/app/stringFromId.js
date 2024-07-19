const dateFromObjectId = function (objectId) {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};
const stringFromDate = (date) => {
  const dayWeek = date.getDay();
  const dayWeekArr = [1, 2, 3, 4, 5, 6, 0];

  const newDate = new Date(date.setDate(date.getDate() - dayWeekArr[dayWeek]));
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();

  const nameOfMonth = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const changedMonth = nameOfMonth[month];

  const string = `WEEK OF ${changedMonth} ${day}, ${year}`;

  return string;
};

export const stringFromId = (id) => {
  const timestamp = dateFromObjectId(id);
  const string = stringFromDate(timestamp);
  return string;
};
