const barElement = document.getElementsByClassName('processing_bar')[0];
const barContainer = document.getElementsByClassName('container')[0];

const createProcessingBar = () => {
  let completed = 0;
  let index = setInterval(function() {
    completed++;
    barElement.style.width = completed.toString() + '%';
    if (completed === 100) clearInterval(index);
  }, 30);
};

const clickCreate = () => {
  barContainer.style.display = "block";
  createProcessingBar();
};
