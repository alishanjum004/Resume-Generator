function addNewWEField() {
  //  console.log("Adding new field")
  let newNode=document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute('placeholder',"Enter here")

let weOb=document.getElementById("we");
  let weAddButtonOb=document.getElementById("weAddButton");

  weOb.insertBefore(newNode,weAddButtonOb);

}
function addNewAQField(){
    let newNode=document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute('placeholder',"Enter here")

let aqOb=document.getElementById("aq");
  let aqAddButtonOb=document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewSFField(){
  let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('sfField');
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder',"Enter here")

let sfOb=document.getElementById("sf");
let sfAddButtonOb=document.getElementById("sfAddButton");

sfOb.insertBefore(newNode,sfAddButtonOb);
}


function generateCV(){

let nameField=document.getElementById("nameField").value;

let nameT1=document.getElementById("nameT1");

nameT1.innerHTML=nameField;

document.getElementById('nameT2').innerHTML=nameField;


document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

document.getElementById('linkedinT').innerHTML=document.getElementById('linkedinField').value;
document.getElementById('twitterT').innerHTML=document.getElementById('twitterField').value;
document.getElementById('instagramT').innerHTML=document.getElementById('instagramField').value;

document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;



let wes=document.getElementsByClassName('weField');
let str='';
for(let e of wes)
{
  str=str +`<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML=str;


let ads=document.getElementsByClassName('eqField');
let str1='';
for(let e of ads)
{
  str1=str1 +`<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML=str1;
   

let sff=document.getElementsByClassName('sfField');
let str2='';
for(let e of sff)
{
  str2=str2 +`<li> ${e.value} </li>`;
}
document.getElementById("sfT").innerHTML=str2;

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}

function printCV(){
  window.print();
}