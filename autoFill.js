const barElement = document.getElementById('processing_bar_1');
const barContainer = document.getElementById('container');

const createBar = () => {
  const barDiv = document.createElement("div");
  barDiv.style.width = "0%";
  barDiv.style.height = "50px";
  barDiv.style.color = "#42e2f4";
  return barDiv;
}

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
