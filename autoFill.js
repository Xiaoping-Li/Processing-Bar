let completed = 0;
const barElement = document.getElementsByClassName('processing_bar')[0];
let index = setInterval(function() {
  completed++;
  barElement.style.width = completed.toString() + '%';
  if (completed === 100) clearInterval(index);
}, 30);