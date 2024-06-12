const text =document.getElementById('text-h1')
const dec =document.getElementById('dec')
const res =document.getElementById('res')
const inc =document.getElementById('inc')
let currval=0
inc.addEventListener('click',()=>{
  currval+=1;
  text.innerHTML =currval
})

dec.addEventListener('click',()=>{
    currval-=1
    text.innerHTML=currval
})

res.addEventListener('click',()=>{
    currval=0
    text.innerHTML=0
})


