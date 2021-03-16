'use strict';


const flowersForm=document.getElementById('formDiv');
const parentElement=document.getElementById('tableDiv');
const tableFlowers = document.createElement('table');
parentElement.appendChild(tableFlowers);
let flowersArray=[];

function Flowers (name, category, season){
    this.name=name;
    this.category=category;
    this.image=[];
    this.season=season;
    flowersArray.push(this);
}

// Flowers.prototype.images=function() {
//  for (let i = 0; i < array.length; i++) {
//      this.imge=
     
//  }
// }

getData();
renderTable();

function handleSubmit(event) {
    event.preventDefault();
    const flowerName=event.target.flowersName.value;
    const flowerCategory=event.target.flowerCategory.value;
    const flowerSeason=event.target.flowerSeason.value;
    let newFlower=new Flowers(flowerName,flowerCategory, flowerSeason );
    localStorage.setItem('flower', JSON.stringify(flowersArray));
    getData();
    renderTable();

}

flowersForm.addEventListener('submit', handleSubmit);

function renderTable() {
    tableFlowers.innerHTML='';
    const tableRow1=document.createElement('tr');
    tableFlowers.appendChild(tableRow1);
    const tableh1=document.createElement('th');
    tableRow1.appendChild(tableh1);
    tableh1.textContent='';
    const tableh2=document.createElement('th');
    tableRow1.appendChild(tableh2);
    tableh2.textContent=`Flower name`;
    const tableh3=document.createElement('th');
    tableRow1.appendChild(tableh3);
    tableh3.textContent=`Flower category`;
    const tableh4=document.createElement('th');
    tableRow1.appendChild(tableh4);
    tableh4.textContent=`Season`;


    for (let i = 0; i< flowersArray.length; i++) {
        const tableRow=document.createElement('tr');
        tableFlowers.appendChild(tableRow);
        const buttoN=document.createElement('button');
        tableRow.appendChild(buttoN);
        buttoN.textContent= `X`;
        // buttoN.setAttribute('onClick', deletRow(this))
        const nameFlower=document.createElement('td');
        tableRow.appendChild(nameFlower);
        nameFlower.textContent= flowersArray[i].name;
        const categoryFlower=document.createElement('td');
        tableRow.appendChild(categoryFlower);
        categoryFlower.textContent= flowersArray[i].category;
        const seasonFlower=document.createElement('td');
        tableRow.appendChild(seasonFlower);
        seasonFlower.textContent= flowersArray[i].season;

     
    }

}
function getData() {
let data=localStorage.getItem('flower');
    if (data){
        flowersArray=JSON.parse(data);
    }
}

function clearData() {
  localStorage.clear();

}

function deletRow(i) {
    var row = i.parentNode.parentNode;
    row.parentNode.removeChild(row);
    flowersArray.splice(i, 1);
   localStorage.setItem('flower', JSON.stringify(flowersArray));
}
