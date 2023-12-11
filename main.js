let pos = 0;
function test(){
    if(pos == 0){
        document.getElementById('bloby').style.transform = 'scale(1,1)';
        document.getElementById('bloby').style.right = '200%';
    }
    if(pos == 1){
        document.getElementById('bloby').style.transform = 'scale(-1,1)';
        document.getElementById('bloby').style.right = '10%';
    }
    if(pos == 0){
        document.getElementById('btn1').textContent = 'Hello';
    }
    if(pos == 1){
        document.getElementById('btn1').textContent = 'Goodbye';
    }

if(pos<1)
    pos = 1;
else pos = 0;
console.log(pos);
}
