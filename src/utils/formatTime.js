var periods = {
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
};

export const formatTime = (timeCreated) => {
  var diff = Date.now() - timeCreated;

  if (diff > periods.month) {
    // it was at least a month ago
    return (
      Math.floor(diff / periods.month) +
      (Math.floor(diff / periods.month) > 1 ? ' months ago' : ' month ago')
    );
  } else if (diff > periods.week) {
    return (
      Math.floor(diff / periods.week) +
      (Math.floor(diff / periods.week) > 1 ? ' weeks ago' : ' week ago')
    );
  } else if (diff > periods.day) {
    return (
      Math.floor(diff / periods.day) +
      (Math.floor(diff / periods.day) > 1 ? ' days ago' : ' day ago')
    );
  } else if (diff > periods.hour) {
    return (
      Math.floor(diff / periods.hour) +
      (Math.floor(diff / periods.hour) > 1 ? ' hrs ago' : ' hr ago')
    );
  } else if (diff > periods.minute) {
    return (
      Math.floor(diff / periods.minute) +
      (Math.floor(diff / periods.minute) > 1 ? ' mins ago' : ' min ago')
    );
  }

  return 'Just now';
};
