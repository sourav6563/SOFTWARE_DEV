const btn = document.getElementById("btn");
const para = document.getElementById("mypara");
btn.addEventListener("click", function () {
  // para.innerHTML = 'Hey baby'
  para.textContent = "ggfggfgfgf";
});
// const btntwo = document.getElementById("btntwo");
let ul = document.getElementById("ul");
ul.addEventListener("click", function () {
  let gh = ul.firstElementChild.classList.add('sunny')
   newli = document.createElement('li')
   newli.textContent = "honey"
   ul.appendChild(newli)
   console.log(ul);
   

  
});
