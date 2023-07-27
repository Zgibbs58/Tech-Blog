module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear() + 5;

    return `${month}/${day}/${year}`;
  },
};
