let count = 0;
let countEl = document.getElementById("count-el")
function increment(){
    count = count += 1;
    countEl.innerText = count
}
let saveEl= document.getElementById("save-el")
function save(){
    saveEl.textContent += count + " - "
    countEl.innerText = 0
    count = 0
}