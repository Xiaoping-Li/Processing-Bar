const barContainer = document.getElementById('container');

const createBar = (id) => {
  const barDiv = document.createElement("div");
  barDiv.id = "processing_bar_" + id.toString();
  barDiv.style.height = "50px";
  barDiv.style.display = "block";
  barDiv.style.border = "1px solid red";

  if (id <= 3) barDiv.style.background = "#42e2f4";
  
  return barDiv;
}

const createProcessingBar = (element) => {
  let completed = 0;
  let index = setInterval(function() {
    completed++;
    element.style.width = completed.toString() + '%';
    if (completed === 100) clearInterval(index);
  }, 30);
};

let barID = 0;

const clickCreate = () => {
  barContainer.style.display = "block";
  barID++;
  const div = createBar(barID);
  document.getElementById("container").appendChild(div); 
  if (barID <= 3) createProcessingBar(div);
};
