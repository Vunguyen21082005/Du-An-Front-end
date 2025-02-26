let intervalId;
let remainingTime = 86400; // 1 ngày = 86400 giây
let isPaused = false; // Biến để kiểm tra trạng thái tạm dừng

function countdown() {
  if (isPaused) {
    return; // Nếu đang tạm dừng, không thực hiện đếm ngược
  }

  const element = document.getElementById("countdown");
  const seconds = remainingTime % 60;
  const minutes = Math.floor((remainingTime / 60)) % 60;
  const hours = Math.floor((remainingTime / 3600));

  element.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(intervalId);
    element.innerHTML = "Hết giờ!";
  }
}

function startCountdown() {
  isPaused = false; // Bắt đầu đếm ngược
  intervalId = setInterval(countdown, 1000);
}

function pauseCountdown() {
  clearInterval(intervalId);
  isPaused = true; // Đặt trạng thái tạm dừng
}

function resetCountdown() {
  clearInterval(intervalId);
  remainingTime = 86400;
  document.getElementById("countdown").innerHTML = "24h 00m 00s";
  isPaused = false; // Đặt trạng thái không tạm dừng
}