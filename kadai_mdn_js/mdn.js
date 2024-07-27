const dateTime = new Date();
const year = dateTime.getFullYear();
const month = dateTime.getMonth() + 1;
const date = dateTime.getDate();

console.log(`${year}年${month}月${date}日`);
