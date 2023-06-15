function add(){
    let digi=document.getElementById('digit').value;
    let digi1=document.getElementById('digit1').value;
    let sum
    sum =Number(digi)+Number(digi1)
    document.getElementById('htag').innerText=sum
}
function multi(){
    let digi=document.getElementById('digit').value;
    let digi1=document.getElementById('digit1').value;
    let sum
    sum=Number(digi)*Number(digi1)
    document.getElementById('htag').innerText=sum
}
function divid(){
    let digi=document.getElementById('digit').value;
    let digi1=document.getElementById('digit1').value;
    let sum
    sum =Number(digi)/Number(digi1)
    document.getElementById('htag').innerText=sum
}
function mod(){
    let digi=document.getElementById('digit').value;
    let digi1=document.getElementById('digit1').value;
    let sum
    sum=Number(digi)%Number(digi1)
    document.getElementById('htag').innerText=sum
}