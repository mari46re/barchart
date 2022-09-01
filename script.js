"use strict";

document.addEventListener("DOMContentLoaded", modifyModel);

const model = [
  8, 12, 32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 16, 3, 1,
  9, 8, 30, 12, 0, 30, 7, 3, 6, 19, 24, 29, 14, 4, 1, 18, 1, 7,
];

//Her beder jeg den gentage displayData og modifyModel
function loop() {
  setTimeout(modifyModel, 1000);
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function displayData() {
  for (let i = 0; i < 40; i++) {
    console.log(i);

    //constant for alle bar elementer i DOM'en
    const bar = document.querySelector(".bar");

    //Højden styles ud fra en beregning af (?)
    bar.style.height = model[i] * 10 + "%";
    console.log(bar.style.height);
    document.querySelector("#bars").append(bar);
  }
}

function modifyModel() {
  const queueSize = getNumberOfCustomers();

  //PUSH et random tal TIL SIDST i arrayet
  model.push(queueSize);

  //SHIFT fjerner det FØRSTE element i arrayet
  model.shift();
  //console.log(model);
  console.log("Function: Modify model");

  //Kalder loop og displayData
  loop();
  displayData();
}
