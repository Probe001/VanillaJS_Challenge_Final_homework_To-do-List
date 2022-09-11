// 실시간 시계 및 날짜
function time() {
  const timeEl = document.querySelector(".time");
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const nowTime = `${hour}:${minute}:${second}`;
  timeEl.innerText = nowTime;

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const month = months[now.getMonth()].toUpperCase();
  const date = String(now.getDate()).padStart(2, "0");
  const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const day = week[now.getDay()];
  const nowDay = `${date} ${day} ${month}`;
  document.querySelector(".time__date").innerText = nowDay;
}
time();
setInterval(time, 1000);
