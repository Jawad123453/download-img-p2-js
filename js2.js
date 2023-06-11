let downlaod=document.querySelector("#me");
let mainbc=document.querySelector(".box");
let entering=document.querySelector(".entering");
let text=document.querySelector("#text");


text.addEventListener("keyup",function(){
  entering.innerHTML=this.value;
})

var loadfile=function(event){
  mainbc.style.backgroundImage="url(" + URL.createObjectURL(event.target.files[0]) +")";
}