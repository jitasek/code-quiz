var timerEl = document.getElementById("countdown");
timerEl.textContent = "Time: 0";

startCountDown = function () {
  var count = 5;

  // define the countdown function
  var countDown = function () {
    timerEl.textContent = "Time: " + count; // display the count value in html
    count--; // decrement the count value

    if (count < -1) {
      clearInterval(timer); // kill timer
      timerEl.textContent = "Time: 0"; // reset the timer element
    }
  };

  var timer = setInterval(countDown, 1000);
};
startCountDown();
