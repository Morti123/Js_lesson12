/* function blockAction(event){
    event.stopPropagation();
    event.currentTarget.classList.toggle('brown_color');
}
let arrBlock = document.querySelectorAll('div');
for(let item of arrBlock){
    item.addEventListener('click',(event)=>blockAction(event));
}
document.querySelector('button').addEventListener('click', event=>{
    event.preventDefault();
}) */
/* 1 */
/* let block = document.querySelector('div');
block.addEventListener('click',() => {
    block.classList.remove('red');
    block.classList.add('green');
});
block.addEventListener('contextmenu',() => {
    block.classList.remove('green');
    block.classList.add('red');
}); */
/* 2 */
/* let angle =0;
let el = document.querySelectorAll("div");
function blockAction1(event){
   if(event.target === event.currentTarget){
      event.currentTarget.classList.toggle("green")
   }
}
function blockAction2(event){
    angle+=45;
    event.stopPropagation();
    event.target.style.transform  = 'rotate(' + angle + 'deg)';
}
for(let item of el){
   item.addEventListener("contextmenu",(event) => {blockAction2(event)})
}

for(let item of el){
   item.addEventListener("click",(event) => {blockAction1(event)})
}
 */
/* 3 */
let newEl = [];
let n = 0;
let el = document.querySelector("div");
let el2 = document.querySelector("button");
function blockAction(event){ 
   newEl.push(document.createElement("div"));
   newEl[n].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
   el.append(newEl[n]);
   n = n + 1;
  
} 
el2.addEventListener("click",(event) => {blockAction(event)})

