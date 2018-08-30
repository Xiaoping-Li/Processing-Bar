const barElement = document.getElementById('processing_bar_1');
const barContainer = document.getElementById('container');

const createBar = (id) => {
  const barDiv = document.createElement("div");
  barDiv.style.width = "40%";
  barDiv.style.height = "50px";
  barDiv.style.merge = "5px";
  barDiv.style.color = "#42e2f4";
  barDiv.style.display = "block";
  barDiv.style.border = "2px solid red";
  barDiv.id = "processing_bar_" + id.toString();
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

let barID = 0;

const clickCreate = () => {
  barContainer.style.display = "block";
  barID++;
  const div = createBar(barID);
  document.getElementById("container").appendChild(div);
  console.log(document.getElementById("container").childNodes); 
  // createProcessingBar();
};
